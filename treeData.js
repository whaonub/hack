// 树形数据转化
let allRes = [{
        resourcesId: 4,
        resName: "删除角色",
        resParentId: 2
    },
    {
        resourcesId: 3,
        resName: "编辑角色",
        resParentId: 1
    },
    {
        resourcesId: 2,
        resName: "设置权限",
        resParentId: 1
    },
    {
        resourcesId: 5,
        resName: "添加用户",
        resParentId: 4
    },
    {
        resourcesId: 6,
        resName: "更新用户",
        resParentId: 4
    },
    {
        resourcesId: 7,
        resName: "删除用户",
        resParentId: 6
    },
    {
        resourcesId: 8,
        resName: "重置密码",
        resParentId: 3
    },
    {
        resourcesId: 9,
        resName: "添加地区",
        resParentId: 5
    },
    {
        resourcesId: 10,
        resName: "编辑地区",
        resParentId: 6
    }
];

// 实例

let arr = toTreeData(allRes);

function toTreeData(data) {
    let resData = data;
    let tree = [];

    for (let i = 0; i < resData.length; i++) {
        if (resData[i].resParentId === 1) {
            let obj = {
                id: resData[i].resourcesId,
                text: resData[i].resName,
                children: []
            };
            tree.push(obj);
            resData.splice(i, 1);
            i--;
        }
    }
    run(tree);

    function run(chiArr) {
        if (resData.length !== 0) {
            for (let i = 0; i < chiArr.length; i++) {
                for (let j = 0; j < resData.length; j++) {
                    if (chiArr[i].id === resData[j].resParentId) {

                        let obj = {
                            id: resData[j].resourcesId,
                            text: resData[j].resName,
                            children: []
                        };
                        chiArr[i].children.push(obj);
                        resData.splice(j, 1);
                        j--;
                    }
                }
                // console.log(chiArr[i].children);
                run(chiArr[i].children);
            }
        }
    }
    return tree;
}

// 封装方法

function toTreeData(data, attributes) {
    let resData = data;
    let tree = [];

    for (let i = 0; i < resData.length; i++) {
        if (resData[i].resParentId === attributes.rootId) {
            let obj = {
                id: resData[i][attributes.id],
                title: resData[i][attributes.name],
                children: []
            };
            tree.push(obj);
            resData.splice(i, 1);
            i--;
        }
    }
    run(tree);

    function run(chiArr) {
        if (resData.length !== 0) {
            for (let i = 0; i < chiArr.length; i++) {
                for (let j = 0; j < resData.length; j++) {
                    if (chiArr[i].id === resData[j][attributes.parentId]) {
                        let obj = {
                            id: resData[j][attributes.id],
                            title: resData[j][attributes.name],
                            children: []
                        };
                        chiArr[i].children.push(obj);
                        resData.splice(j, 1);
                        j--;
                    }
                }
                run(chiArr[i].children);
            }
        }
    }

    return tree;

}


// 方法调用

let data = allRes;
// 属性配置信息
let attributes = {
    id: 'resourcesId',
    parentId: 'resParentId',
    name: 'resName',
    rootId: 1
};
let treeData = toTreeData(data, attributes);