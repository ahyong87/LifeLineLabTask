import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

class Storage {
  static storageKey = ['isLogin', 'dataList', 'dataTotal', 'dataPage'];

  constructor() {
    this.data = {};
  }

  init = async () => {
    try {
      const data = await AsyncStorage.multiGet(Storage.storageKey);

      data.forEach(([key, value]) => {
        if (!_.isUndefined(value) && !_.isNull(value)) {
          this.data[key] = value;
        }
      });

      return data;
    } catch (error) {
      console.log('ERROR: Storage.init', error);
      return error;
    }
  };

  get = () => this.data;

  getByKey = (key, defaultValue) =>
    this.data && this.data[key] ? this.data[key] : defaultValue || null;

  set = obj => {
    const objToMerge = {};

    Storage.storageKey.forEach(key => {
      if (!_.isUndefined(obj[key]) && !_.isNull(obj[key])) {
        objToMerge[key] = obj[key];
      }
    });

    _.assign(this.data, objToMerge);
    return AsyncStorage.multiSet(_.toPairs(this.data));
  };

  deleteAll = () => {
    this.data = {};
    AsyncStorage.multiRemove(Storage.storageKey);
  };
}

export default new Storage();
