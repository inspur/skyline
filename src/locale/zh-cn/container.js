export default {
  container: {
    containerService: "容器服务",
    containerCluster: "容器集群",
    deployedCluster: "已部署集群",
    deployedClusterDesc: "已部署集群是指根据集群模板创建的Kubernetes集群。" +
      "项目管理员可自行维护所属项目的集群，超级管理员需要切入到具体项目并拥有该项目的项目管理员权限才能维护。",
    clusterTemplate: "集群模板",
    clusterTemplateDesc: "集群模板是指可用于部署Kubernetes集群的模板。" +
      "项目管理员可自行维护所属项目的集群模板，超级管理员需要切入到具体项目并拥有该项目的项目管理员权限才能维护。",
    containerImage: "容器镜像",
    containerImageDesc: "使用容器镜像前，请首先搭建Harbor服务。",
    imageGroup: "镜像组",
    image: "镜像",
    containerInstance: "容器实例",
    containerInstanceDesc: "超级管理员只有查看容器实例的权限，操作容器实例请用项目管理员或者项目用户登录。",
    containerApp: "应用",
    appDetail: "应用详情",
    basicInfo: "基本信息",
    nodeList: "节点列表",
    container: "容器",
    environmentParam: "环境变量",
    service: "服务",
    hpa: "弹性伸缩",
    event: "事件",
    pod: "容器",
    podDetail: "容器详情",
    command: "命令",
    parameter: "参数",
    runCommand: "启动命令",
    runParameter: "启动参数",
    log: "日志",
    monitor: "监控",
    containerVolume: "容器卷",
    containerVolumeDesc: "容器卷是指可挂载到Kubernetes容器应用以实现容器数据持久化的数据卷。" +
      "存储提供者是可以创建容器卷的存储系统的插件，目前只支持cinder插件。",
    containerApp2Desc: "位于云物理机上的应用只支持ISCSI协议对应的卷类型。",
    masterNodeCount: "主节点数",
    nodeCount: "从节点数",
    masterAndNodes:"主/从节点数",
    keypair: "密钥对",
    create: "创建",
    startMonitor: "开启监控",
    startMonitorConfirmMsg: "确认开启监控？",
    startMonitorSuccessMsg: "开启监控成功。",
    startMonitorFailMsg: "开启监控失败。",
    stopMonitor: "关闭监控",
    stopMonitoring: "关闭监控中。",
    stopMonitorConfirmMsg: "确认关闭监控？",
    startDelete: "开始删除",
    startMonitorErrorTip1: "系统所需镜像不存在，请在镜像库",
    startMonitorErrorTip2: " 中 system 镜像组下上传 influxdb:v0.5及heapster:v1.2.0 后再开启监控。",
    stopMonitorErrorTip: "请先关闭集群下所有应用的弹性伸缩",
    unknown: "未知",
    started: "已开启",
    stopped: "未开启",
    starting: "开启中",
    stopping: "关闭中",
    createContainerCluster: "创建容器集群",
    others: "其他",
    startCreating: "开始创建应用",
    timeout: "超时时间",
    minute: "分钟",
    clusterTemplateName: "集群模板名称",
    clusterTemplateId: "集群模板ID",
    apiAddress: "API地址",
    masterNodeAddress: "主节点地址",
    nodeAddress: "从节点地址",
    heatStack: "编排实例",
    timeoutMin: "超时时间(分钟)",
    masterNodeFlavor: "主节点规格",
    nodeFlavor: "从节点规格",
    deleteSuccessMsg: "删除成功",
    availabilityZone: "可用域",
    storageDriver: "存储驱动",
    volumeSizeGB: "卷大小(GB)",
    externalNetwork: "外部网络",
    fixedNetwork: "固定网络",
    fixedSubnet: "固定子网",
    imageLibray: "镜像库",
    pauseImageAddress: "Pause镜像地址",
    createContainerTemplate: "创建容器模板",
    setNodeFlavor: "节点规格",
    network: "网络",
    createSuccessMsg: "创建成功",
    availabilityZoneDesc: "如果所选可用域被删除或改名，会导致集群创建失败。",
    k8sValidatorDesc: "版本列表需要上传制作好的虚拟机镜像，并设置正确的元数据信息。",
    k8sAlert: "暂不支持该版本。",
    imageDesc: "镜像操作系统类型必须为Fedora-automic，否则无法创建成功。",
    masterNodeFlavorDesc: "主节点所使用的云主机的资源规格。",
    nodeFlavorDesc: "从节点所使用的云主机的资源规格。",
    storageType: "存储类型",
    storageDriverDesc: "存储驱动类型选择overlay时，卷大小最小1GB，<br>选择devicemapper时，卷大小最小3GB。",
    core: "核",
    memory: "内存",
    hardDisk: "硬盘",
    externalNetworkDesc: "所选外部网络需要与Openstack管理网络保持通畅。",
    fixedNetworkDesc: "如果选择了固定网络和固定子网，请确保它们与所选外部网络之间有对应的路由；<br>" +
      "如果不选择固定网络和固定子网，系统会自动创建10.0.0.0/24段的网络，并自动生成它们与所选外部网络之间的路由。",
    pauseImage: "Pause镜像",
    pauseImageVersion: "Pause镜像版本",
    modifyContainerTemplate: "修改容器模板",
    modifySuccessMsg: "修改成功",
    ok: "正常",
    creating: "正在创建",
    updating: "正在修改",
    serverError: "服务异常",
    authError: "认证错误",
    ipPortError: "IP或端口错误",
    createHarbor: "添加容器镜像私服",
    harborIPDesc: "Harbor服务管理IP。",
    modifyHarbor: "修改容器镜像私服",
    imageCount: "镜像数",
    tagCount: "版本数",
    pullCount: "下载数",
    pushImage: "推送镜像",
    containerImageAuthError: "身份认证失败。",
    pushImageTip: "推送一个镜像到当前项目的参考命令。",
    dockerTag: "在项目中标记镜像",
    dockerPush: "推送镜像到当前项目",
    pullCommand: "Pull命令",
    imageCreateTime: "镜像创建时间",
    dockerVersion: "Docker版本",
    structure: "架构",
    os: "操作系统",
    creator: "创建者",
    sizeMB: "大小(MB)",
    attachedCluster: "挂载集群",
    attachedApp: "挂载应用",
    attach: "挂载",
    detach: "卸载",
    detachVolumeConfirmMsg: "卸载后应用将无法读取卷中数据，确认卸载？",
    available: "空闲",
    attached: "已挂载",
    attaching: "正在挂载",
    detaching: "正在卸载",
    attachError: "挂载失败",
    detachError: "卸载失败",
    detachSuccessMsg: "卸载请求成功",
    createVolume: "创建容器卷",
    size: "大小",
    attachToContainerApp: "挂载到容器应用",
    attachToContainerAppTip: "挂载卷后容器应用的副本数将自动变为1。<br>" +
      "卷挂载路径写错，可能会导致应用一直处于操作中，出现这种情况建议用户卸载卷，再挂载卷到别的路径。",
    attachToContainerAppTip2: "卷挂载路径写错，可能会导致应用一直处于操作中，<br>" +
      "出现这种情况建议用户卸载卷，再挂载卷到别的路径。",
    cluster: "集群",
    attachPath: "卷挂载路径",
    attachPathTip1: "挂载路径必须是以/开头的绝对路径，且不允许为根目录。",
    attachPathTip2: "常用镜像挂载路径:",
    attachPathTip3: "具体挂载点需要参照镜像描述文件",
    attachPathTip4: "若输入的路径在所选的应用中已存在，则会覆盖原路径下的内容，请谨慎操作",
    attachPathTip5: " 若多个卷挂载到同一应用的相同目录路径下，可能导致应用错误，请谨慎操作",
    copyNumber: "副本数",
    attachedVolume: "已挂载卷",
    running: "运行中",
    closed: "已停止",
    processing: "操作中",
    open: "开启",
    close: "关闭",
    openAppConfirmMsg: "是否开启此应用",
    openAppMsg: "正在开启",
    closeApppConfirmMsg: "是否关闭此应用",
    closeAppMsg: "正在关闭",
    attachVolume: "挂载卷",
    detachVolume: "卸载卷",
    deleting: "正在删除",
    deleteAppConfirmMsg: "确认删除应用？输入 YES 继续确认操作。",
    startHpa: "开启弹性伸缩",
    startClusterMonitorMsg: "请先为集群开启监控",

    modifyHpa: "修改弹性伸缩",
    stopHpa: "关闭弹性伸缩",
    stopHpaConfirmMsg: "确认关闭弹性伸缩",
    createContainerApp: "创建容器应用",
    tags: "标签",
    portConfig: "端口配置",
    dosConfig: "命令与参数",
    notallow: "不允许只有参数没有命令的提交",
    version: "版本",
    appType: "服务类型",
    stateful: "有状态",
    stateless: "无状态",
    statefulDesc: "若需数据持久化，请使用有状态服务。",
    cpuNumber_copy: "每个副本CPU",
    memorySize_copy: "每个副本内存",
    key: "键",
    keyExistError: "键已存在",
    value: "值",
    operate: "操作",
    add: "添加",
    portName: "端口名称",
    portNameExistError: "端口名称已存在",
    containerPort: "容器端口",
    portIsnotSame: "容器端口需要与所选镜像中端口一致",
    containerPortExistError: "容器端口已存在",
    protocol: "协议",
    nodeServicePort: "映射服务端口",
    nodeServicePortExistError: "映射服务端口已存在",
    autoAllocation: "自动分配",
    Manualy: "手动指定",
    atLeastOnePort: "请至少配置一个端口",
    modifyContainerInstance: "修改容器实例",
    attachSuccessMsg: "挂载请求成功",
    appName: "应用名称",
    minCopyNumber: "最小副本数",
    minCopyNumber4App: "应用最小副本数",
    maxCopyNumber: "最大副本数",
    maxCopyNumber4App: "应用最大可扩展数",
    cpuThreshold: "CPU阈值(%)",
    cpuThresholdDesc: "容器实例占用的CPU与总的CPU的限制比例",
    everyDay: "每天",
    everyNDay: "每N天",
    everyNHour: "每N小时",
    everyWeek: "每周",
    everyMonth: "每月",
    sunday: "周日",
    saturday: "周六",
    friday: "周五",
    thursday: "周四",
    wednesday: "周三",
    tuesday: "周二",
    monday: "周一",
    minCopyBiggerThanMaxCopy: "最小副本数不能大于最大副本数",
    copyNumberTitle: "运行中/总数",
    address: "地址",
    hostIP: "所在节点",
    abnormal: "异常",
    selector: "选择器",
    internalIP: "内部IP",
    portList: "端口列表",
    startHpaTip: "请先开启弹性伸缩功能再查看详情",
    hpaVolumeMsg: "应用已挂载卷，无法开启弹性伸缩",
    eventList: "事件列表",
    detail: "详情",
    time: "时间",
    resConfig: "资源配置",
    startMonitorTip: "请先为集群开启监控，再查看容器的监控信息",
    cpuUsage: "CPU使用量",
    memUsage: "内存使用量",
    networkFlow: "网络流量",
    upload: "上传",
    download: "下载",
    oneHour: "1小时",
    oneDay: "1天",
    oneWeek: "1周",
    storageNetwork: "存储网络",
    storageSubnet: "存储子网",
    applyEventName: "应用事件名称",
    applyEvent: "应用事件",
    applyEventDetail: "应用事件详情",
    containerEventName: "容器事件名称",
    containerEvent: "容器事件",
    containerEventDetail: "容器事件详情",
    diyTag: "自定义标签",
    tagMaxlength: "最多可添加{0}个自定义标签",
    reservedKey: "{0}为保留字段，不允许编辑",
    addNode: "增加Worker节点",
    deleteNode: "删除Worker节点",
    addNodeCount: "增加Worker节点数",
    deleteNodeCount: "删除Worker节点数",
    oldNodeCount: "原Worker节点数",
    minNodeSize: "集群剩余从节点数不得小于1",
    maxNodeSizePerOper: "每次最多可添加10个节点",
    dontRepeatSubmit: "请求已发给后台执行，集群更新期间，请勿频繁操作",
    everyHour: "每小时",
    kubernetesCluster: "Kubernetes集群",
    clusterName: "集群名称",
    clusterVersion: "集群版本",
    clusterNetwork: "集群网络",
    clusterSubnetwork: "集群子网",
    clusterDescription: "集群描述",
    belongProject: "所属项目",
    clusterState: "集群状态",
    masternodeIP: "主节点浮动IP",
    workernodeIP: "从节点浮动IP",
    timeouts: "超时时间",
    createkbCluster: "创建容器集群",
    "CREATE_IN_PROGRESS": "正在创建",
    "CREATE_FAILED": "创建失败",
    "CREATE_COMPLETE": "创建完成",
    "DELETE_IN_PROGRESS": "正在删除",
    "DELETE_COMPLETE": "删除完成",
    "DELETE_FAILED": "删除失败",
    "SUSPEND_IN_PROGRESS": "正在挂起",
    "SUSPEND_COMPLETE": "挂起完成",
    "SUSPEND_FAILED": "挂起失败",
    "RESUME_IN_PROGRESS": "正在恢复中",
    "RESUME_COMPLETE": "恢复完成",
    "RESUME_FAILED": "恢复失败",
    "ROLLBACK_IN_PROGRESS": "正在回滚",
    "ROLLBACK_COMPLETE": "回滚完成",
    "ROLLBACK_FAILED": "回滚失败",
    "SNAPSHOT_IN_PROGRESS": "快照进行中",
    "SNAPSHOT_COMPLETE": "生成快照完成",
    "SNAPSHOT_FAILED": "生成快照失败",
    "UPDATE_IN_PROGRESS": "kubernetes更新中",
    "UPDATE_COMPLETE": "更新完成",
    "UPDATE_FAILED": "更新失败",
    "CHECK_IN_PROGRESS": "检查中",
    "CHECK_COMPLETE": "检查完成",
    "CHECK_FAILED": "检查失败",
    "INIT_IN_PROGRESS": "正在初始化",
    "INIT_COMPLETE": "初始化完成",
    "INIT_FAILED": "初始化失败",
    "ADOPT_IN_PROGRESS": "正在启用配置",
    "ADOPT_COMPLETE": "配置完成",
    "ADOPT_FAILED": "配置失败",
    "unavailable": "kubernetes不可用",
    "provisioning": "kubernetes初始化中",
    "active": "kubernetes创建完成",
    "removing": "kubernetes删除中",
    "runstate": "运行状态",
    "applicationType": "应用类型",
    "containerTeam": "容器组",
    "serviceSet": "服务设置",
    "accessType": "访问类型",
    "innerAccess": "内部访问",
    "outerAccess": "外部访问",
    "containerTeamList": "容器列表",
    "containerTeamName": "容器名称",
    "listenerPort": "监听端口",
    "targetPort": "目标端口",
    "nodeName": "节点名称",
    "nodeIP": "节点IP",
    "nodeState": "节点状态",
    "nodesFlavor": "节点规格",
    "nodeRole": "节点角色",
    "serviceState": "服务状态",
    "deleteRequest": "删除请求成功",
    "volumeNote": "该硬盘可用于存储容器文件和容器镜像文件，建议大于3GB",
    "createRequest": "创建请求发送成功",
    "registering": "初始化中",
    "required": "此处不可空白",
    "nodePort": "节点端口",
    "listenerPortExistError": "监听端口已存在",
    "storageProvider": "存储提供者",
    "removeNode": "减少Worker节点",
    "removeNodeNumber": "减少Worker节点数",
    "belongCluster": "所属集群",
    "addStorageProvider": "添加存储提供者",
    "outPort": "外部访问端口",
    "oldMasterNumber": "原Master节点数",
    "addworkNote": "Worker节点数加Master节点数之和不能超过亲和性策略成员的配额",
    "removeworkNote": "集群worker节点数量不能小于1",
    "workerConfig": "Worker配置",
    "masterConfig": "Master配置",
    "startMode": "启动方式",
    "volumeStart": "卷启动",
    "editStorageProvider": "修改存储提供者",
    "passwordNote": "密码为该用户的登陆密码",
    "volumeNote2": "若选择创建容器卷，则必须输入卷大小，卷类型可选。",
    "volumeNote3": "若不指定卷类型，则使用默认卷类型。",
    "mountstatus": "挂载状态",
    "unmounted": "未挂载",
    "storageVolume": "存储卷",
    "portMaxNote": "最多添加10个端口",
    "maxteamLength": "容器组最多添加5个容器",
    "containerTeanNameCheck": "容器名称重复",
    "passwordError": "密码错误，请检查密码是否正确",
    "serviceTabNote": "有状态应用需要依赖一个内部访问服务以保证pod的有序性，无论是否选择创建服务，是否选择外部访问，该内部服务都会随应用一同创建出来",
    "repeatnameError": "名称重复",
    "networkNoteCheck": "DNS Server IP不在Service CIDR范围内",
    "deviceConnect": "设备连接",
    "podcidrNote": "用于k8s集群内部为pod分配Cluster IP，建议使用16位掩码。<br>Pod CIDR和Service CIDR不能在同一个网段。",
    "servercidrNote": "用于k8s集群内部为Service分配Cluster IP，建议使用16位掩码。<br>Pod CIDR和Service CIDR不能在同一个网段。",
    "dnsserveripNote": "用于k8s集群内部通过Service名称解析IP地址，需要落在Service CIDR之内。",
    "advanceSet": "高级设置",
    "volumeNumber": "卷数目",
    "appManage": "应用管理",
    maxSizeOnevolCapa: "1.单个存储卷的最大容量为128T。2.若存储卷使用的存储后端配置超分比，需要预留空间，剩余空间不足时，扩容操作可能不生效。3.glance对接cinder时存储镜像的存储卷，会占用项目下的存储卷容量配额",
    accountLocked: "用户已被锁定，请解锁之后再试",
    mountVolume: "挂载容器卷",
    mountedVolumeList: "已挂载容器卷列表",
    selectVolumeList: "选择容器卷",
    createStation: "创建位置",
    aztotal: "AZ总数",
    vmaz: "云主机(按AZ)",
    vmproject: "云主机(按项目)",
    cpuallocate: "CPU分配比",
    hostcputotal: "主机CPU总核数",
    vmcputotal: "云主机CPU总核数",
    memallocate: "内存分配比",
    hostmemtotal: "主机内存总数",
    vmhosttotal: "云主机内存总数",
    storageallocate: "块存储分配比",
    realstoragetotal: "总容量",
    storageused: "块存储实际使用",
    storageblocktotal: "已分配容量",
    startModTip: "选择卷启动时，Master配置的创建位置不能选择云物理机",
    startModTip2: "选择卷启动时，Worker配置的创建位置不能选择云物理机",
    byProject: "(按项目)",
    blockStorage: "块存储",
    serviceNormal: "服务正常",
    serviceUnnormal: "服务异常",
    subnetNote1: "如果所选集群子网包含",
    subnetNote2: "的IP，<br>则需要在下方高级设置中修改k8s的网段设置，避免冲突",
    or: "或",
    maxis: "最大值为",
    filestorageused: "文件存储实际使用",
    objectstorageused: "对象存储实际使用",
    addContainer: "添加容器",
    blockName: "superuser",
    blockPs: "passw0rd",
    replicasNote: "如果选择容器卷，则副本数设置无效",
    X509_ERROR: "x509证书错误",
    AUTH_ERROR: "账号或密码错误",
    IP_PORT_ERROR: "IP地址或端口错误",
    HARBOR_SERVER_ERROR: "服务器内部错误",
    cniPlus: "cni插件",
    ironicTips: "裸机集群上的应用挂载卷支持的卷类型和裸机支持的卷类型一致，目前只支持isci协议对应的卷类型。",
    openBalance: "开启弹性伸缩",
    closeBalance: "关闭弹性伸缩",
    memThreshold: "内存阈值(%)",
    setScaling: "设置弹性伸缩",
    setScalingSuccess: "弹性伸缩设置成功",
    replicasCompare: "最大副本数须大于最小副本数",
    blockStorageUsage: "块存储使用率",
    realUsage: "实际使用率",
    objectStorageUsage: "对象存储实际使用",
    customStartPage: "自定义起始页&大屏",
    hostNum: "宿主机总数",
    top5Hostnum: "TOP5-承载云主机数量",
    top5cpuusage: "TOP5-CPU使用率(历史)",
    top5memusage: "TOP5-内存使用率(历史)",
    top5netspeed: "TOP5-网络速率(历史)",
    unhealthyHost: "不健康主机",
    unhealthvm: "不健康云主机",
    diskin: "磁盘进",
    diskout: "磁盘出",
    startPageCustom: "起始页定制",
    bigscreenCustom: "大屏定制",
    startpage_custom_note: "提示：大屏定制后，需要刷新大屏页面才能生效",
    setScalingSet: "弹性伸缩设置",
    scalingCompare: "伸缩规则的容量上限必须大于容量下限",
    minReplicasTip: "最小副本数建议设置为期望的常驻副本数",
    unsupport: "不支持",
    volumesupportTips: "不支持卷类型为共享的卷。",
    cniTips: "flannel:安装配置和网络模型简单，适合网络功能需求不高的场景。<br>calico:支持定义网络策略规则，性能较好，适合对网络功能、性能要求较高的场景。",
    connecting: "正在连接中，请稍后.....",
    deleteContainerDisk: "同时删除容器卷对应的云硬盘",
    addacontainer: "请至少添加一个容器",
    clustertokenfailed: "集群Token获取失败",
    deleteDiskNote: "状态不正常的集群，删除后可能无法自动删除容器卷对应的云硬盘",
    clusterMonitor: "集群监控",
    clusterInfo: "集群详情",
    monitorStatus: "Prometheus监控",
    cpuused: "已分配",
    cpuleft: "剩余",
    cputotal: "CPU总数",
    memtotal: "内存总数",
    deployment: "无状态应用",
    statefulSet: "有状态应用",
    daemonSet: "DaemonSet",
    configFile: "配置文件",
    k8sversion: "K8s版本",
    showCPUCore: "核",
    kubeletInfo: "kubelet组件正常数/总数",
    deployStep: "安装步骤",
    compStatus: "组件状态",
    deployStep1: "如果已安装Prometheus监控，请检查集群状态；如果未安装，请执行以下步骤：",
    deployStep2: "1、将kubeconfig文件复制到任意master节点 ~/.kube/config; ",
    deployStep3: "2、执行kubectl apply -f /opt/prom/manifests/setup; ",
    deployStep4: "3、执行kubectl apply -f /opt/prom/manifests; "
  }
};
