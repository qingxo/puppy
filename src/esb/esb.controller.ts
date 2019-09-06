import { Controller, Get, Post } from '@nestjs/common';

@Controller('console')
export class EsbController {
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
}
