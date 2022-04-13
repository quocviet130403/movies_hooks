import {DOMAIN} from '../util/Variables';
class BaseService{
    axios = require('axios');
    get(){
        axios({
            method: 'get',
            url: `${DOMAIN}api/QuanLyPhim/LayDanhSachBanner`,
          })
              .then(function (response) {
                  console.log(123);
        });
    }
}

export default BaseService;