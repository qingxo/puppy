import { Controller, Get, Post, Delete, Body, Put } from '@nestjs/common';
import { getMaxListeners } from 'cluster';

@Controller('console')
export class EsbController {
  enterPriseList: Array<object> = [
    {
      key: '1',
      entName: 'kaka',
      remark: 'beizhu',
      entCode: 'x802ff834',
    },
    {
      key: '2',
      entName: 's22',
      remark: 'fdf',
      entCode: 'x80dff2834',
    },
    {
      key: '11',
      entName: 'fdf',
      remark: 'beizhu',
      entCode: 'x802834',
    },
  ];
  @Post('login')
  login() {
    let obj = {
      data: {
        tokenId: 'xxxxxafasflaja;dfja;jflsafjlasfjq2wrowupefn;a,nf;pajfoo',
        user: {
          createdAt: '2011-11-11 11:11:11',
          createdBy: '张三',
          deleted: false,
          entCode: 'EEEE0001',
          id: 123456,
          lastUpdatedAt: '2011-11-11 11:11:11',
          lastUpdatedBy: '李四',
          name: '张三',
          password: '张三',
          remark: '备注说明',
          type: 'MK_ADMIN',
          username: '张三',
        },
      },
      errorCode: null,
      errorMsg: null,
      success: true,
    };
    return obj;
  }

  @Delete('ent')
  delEnterprise(id) {
    return {
      id,
      data: true,
      success: true,
    };
  }

  @Put('ent')
  putEnterprise(@Body() body) {
    let target = {};
    this.enterPriseList.forEach((item, index) => {
      if (item['entCode'] === body.entCode) {
        Object.assign(item, body);
        target = item;
      }
    });
    return {
      target,
      success: true,
    };
  }

  @Post('ent')
  addEnterprise(@Body() body) {
    this.enterPriseList.push(body);
    return {
      success: true,
    };
  }

  @Post('ent/list')
  getList() {
    return {
      data: this.enterPriseList,
    };
  }
}
