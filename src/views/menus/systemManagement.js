module.exports = function() {
  return {
    flg: Vue.AuthList["m.systemmanage"],
    key: "systemManagement",
    path: "/systemManagement/",
    iconType: "el-icon-fa-life-buoy",
    name: 'base.systemManagement',
    subMenus: [
    {
      flg: Vue.AuthList["m.systemmanage.projectmanage"],
      key: "project",
      path: "project",
      iconType: "el-icon-fa-newspaper-o",
      name: 'base.projectManagement'
    }, {
      flg: Vue.AuthList["m.systemmanage.project.projectmanage"],
      key: "projectManage",
      path: "projectManage",
      iconType: "el-icon-fa-newspaper-o",
      name: 'base.projectManagement'
    }, {
      flg: Vue.AuthList["m.systemmanage.departmentmanage"],
      //flg:true,
      key: "departmentManage",
      path: "departmentManage",
      iconType: "el-icon-fa-sitemap",
      name: 'base.deptManagement'
    }, {
      flg: Vue.AuthList["m.systemmanage.groupmanage"],
      key: "org",
      path: "org",
      iconType: "el-icon-fa-group",
      name: 'base.groupManagement'
    }, {
      flg: Vue.AuthList["m.systemmanage.rolemanage"],
      key: "role",
      path: "role",
      iconType: "el-icon-fa-graduation-cap",
      name: 'base.roleManagement'
    }, {
      flg: Vue.AuthList["m.systemmanage.usermanage"],
      //flg:true,
      key: "user",
      path: "user",
      iconType: "el-icon-fa-user-o",
      name: 'base.userManagement'
    }, {
      flg: Vue.AuthList["m.systemmanage.ipsetting"],
      key: "ipSetting",
      path: "ipSetting",
      iconType: "el-icon-fa-gear",
      name: 'base.ipSetting'
    }, {
      flg: Vue.AuthList["m.systemmanage.systemstatus"],
      key: "systemStatus",
      path: "systemStatus",
      iconType: "el-icon-fa-desktop",
      name: 'base.systemStatus'
    }, {
      flg: Vue.AuthList["m.systemmanage.serialnumber"],
      key: "serialNumber",
      path: "serialNumber",
      iconType: "el-icon-fa-map-pin",
      name: 'base.serialNumberManagement'
    }, {
      flg: Vue.AuthList["m.systemmanage.paramsetting"],
      key: "parameterSetting",
      path: "parameterSetting",
      iconType: "el-icon-fa-cog",
      name: 'base.parameterSetting'
    }, {
      flg: Vue.AuthList["m.systemmanage.certManage"],
      key: "certManage",
      path: "certManage",
      iconType: "el-icon-fa-key",
      name: 'base.certManage'
    }, {
      flg: Vue.AuthList["m.systemmanage.opreatelog"],
      key: "record",
      path: "record",
      iconType: "el-icon-fa-file-text-o",
      name: 'base.operateRecord'
    }]
  };
}

