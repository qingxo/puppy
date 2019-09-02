import { Controller, Get } from '@nestjs/common';

@Controller('common')
export class CommonController {
  menu = [
    {
      name: '企业管理',
      icon: 'anticon-qiye',
      url: '/admin/wel',
      id: 1,
    },
    {
      icon: 'anticon-user',
      name: '用户管理',
      url: '/admin/result',
      id: 20,
    },
    {
      icon: 'anticon-api',
      name: 'API账号管理',
      url: '/admin/result',
      id: 21,
    },
    {
      icon: 'anticon-console',
      name: '引擎脚本管理',
      url: '/admin/result',
      id: 22,
    },
    {
      icon: 'anticon-pipe',
      name: '接口管理',
      url: '/admin/result',
      id: 23,
    },
    {
      icon: 'anticon-pipe-manage',
      name: '接口配置',
      url: '/admin/result',
      id: 24,
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
