import { Controller, Get } from '@nestjs/common';

@Controller('common')
export class CommonController {
  menu = [
    {
      name: '主页',
      icon: 'anticon-menu',
      id: 0,
      children: [
        {
          id: 1,
          icon: 'anticon-user',
          name: '功能一',
          title: '',
          url: '/admin/wel',
        },
        {
          id: 3,
          icon: 'anticon-setting',
          name: '功能二',
          title: '功能二',
          url: '/admin/test',
        },
        {
          id: 43,
          icon: 'internationalization',
          name: '功能三',
          title: '功能三',
          url: '/admin/test2',
        },
      ],
    },
    {
      icon: 'anticon-user',
      name: '会员管理',
      url: '/admin/result',
      id: 20,
    },
    {
      icon: 'anticon-testing',
      name: '员工管理',
      url: '/admin/result',
      id: 21,
    },
    {
      icon: 'anticon-fix',
      name: '设置',
      url: '/admin/result',
      id: 22,
    },
  ];
  loginInfo = {
    name: 'kaka',
    type: 'admin',
    image: 'avatar',
  };
  @Get('getMenu')
  getMenu(): object {
    return { data: this.menu };
  }

  @Get('login')
  getLogin(data): object {
    return { data: this.loginInfo };
  }
}
