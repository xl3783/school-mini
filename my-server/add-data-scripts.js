const axios = require('axios');

// 定义 POST 请求的数据和配置
const postData = {
    "name": "首页",
    "icon_name": "icon-home",
    "jump_url": "../../pages/index/index",
    "jump_name": "首页",
    "is_del": 0,
    "sort": 0,
    "jump_type": 1,
    "is_show": 1,
    "category_ids": 13,
    "base_url": "/pages/index/index",
    "icon_url": 1
}


const bottomData = [{
    "id": 1,
    "name": "首页",
    "icon_name": "icon-home",
    "jump_url": "..\/..\/pages\/index\/index",
    "jump_name": "首页",
    "is_del": 0,
    "sort": 0,
    "extend": "",
    "jump_type": 1,
    "is_show": 1,
    "category_ids": 13,
    "base_url": "\/pages\/index\/index"
}, {
    "id": 14,
    "name": "院系专业",
    "icon_name": "icon-zhuanye",
    "jump_url": "\/pages\/enroll-major-new\/enroll-major-new?fmType=1",
    "jump_name": "院系列表",
    "is_del": 0,
    "sort": 1,
    "extend": "{\"ids\":[],\"nav\":[1,3,0,0],\"url\":\"\/prepare\/mixture\/mixture\"}",
    "jump_type": 1,
    "is_show": 1,
    "detail_id": 1,
    "category_ids": 0,
    "base_url": "\/pages\/enroll-major-new\/enroll-major-new"
}, {
    "id": 2,
    "name": "个人中心",
    "icon_name": "icon-wode",
    "jump_url": "..\/..\/pages\/my\/my",
    "jump_name": "个人中心",
    "is_del": 0,
    "sort": 9,
    "extend": "",
    "jump_type": 1,
    "is_show": 1,
    "category_ids": 25,
    "base_url": "\/pages\/my\/my"
}]


// bottomData.map(data => {
//     axios.post('http://localhost:1337/api/bottom-items', {"data": data})
//         .then(response => {
//             console.log('Response data:', response.data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// })


const homeConfig = {
    "score_list": 2,
    "score_style": 1,
    "is_get_phone": 0,
    "enroll_plan_style": 1,
    "enroll_plan_list": 2,
    "major_intro_style": 2,
    "is_showall": 0,
    "no_mourn": 1,
    "live_list": 1,
    "title_name": "智慧招生平台",
    "title_position": 2,
    "color": "#4a90e2",
    "is_collect": 0,
    "name": "荆州职业技术学院",
    "enroll_type": 1,
    "is_show_support": 1,
    "is_privacy": 0
}

axios.put('http://localhost:1337/api/home-config', {"data": homeConfig})
    .then(response => {
        console.log('Response data:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


const navs = [{
    "id": 3506,
    "component_id": 1379,
    "name": "学院简介",
    "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20221208\/rbZ1Ld1oizKmkuD66AiBLAhLDORfuhcYFeltPWze.jpg",
    "source_type": 0,
    "jump_url": "..\/..\/pages\/campus-intro\/campus-intro",
    "jump_type": 1,
    "type": 0,
    "category_ids": "7",
    "base_url": "\/pages\/campus-intro\/campus-intro"
}, {
    "id": 3507,
    "component_id": 1379,
    "name": "招生简章",
    "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20221208\/JwS5FNW5FcVEJaW9XKKybfZgKt7kj0p0PTrEeDpy.jpg",
    "source_type": 0,
    "jump_url": "\/prepare\/mixture\/mixture?aid=11",
    "jump_type": 3,
    "type": 0,
    "category_ids": "1,1",
    "base_url": "\/prepare\/mixture\/mixture?aid=11"
}, {
    "id": 3508,
    "component_id": 1379,
    "name": "招生计划",
    "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20221208\/yY7rXwtqXRgS0oZzGw66k0RiRaQx1A08WPPHqog5.jpg",
    "source_type": 0,
    "jump_url": "\/prepare\/mixture\/mixture?aid=10",
    "jump_type": 3,
    "type": 0,
    "category_ids": "1",
    "base_url": "\/prepare\/mixture\/mixture?aid=10"
}, {
    "id": 3509,
    "component_id": 1379,
    "name": "院系专业",
    "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20221208\/kWe2uz0e7baS5ctMYSK7gfI7807sTD2qUKRjXgTp.jpg",
    "source_type": 0,
    "jump_url": "\/pages\/enroll-major-new\/enroll-major-new?fmType=1",
    "jump_type": 1,
    "type": 0,
    "category_ids": "",
    "base_url": "\/pages\/enroll-major-new\/enroll-major-new?fmType=1"
}, {
    "id": 3510,
    "component_id": 1379,
    "name": "多彩校园",
    "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20221208\/EYJfr75NAHmuEdxIvkKT2tFMJk8SaMEFMSH2IcV0.jpg",
    "source_type": 0,
    "jump_url": "\/prepare\/mixture\/mixture?vid=3",
    "jump_type": 3,
    "type": 0,
    "category_ids": "3",
    "base_url": "\/prepare\/mixture\/mixture?vid=3"
}, {
    "id": 3511,
    "component_id": 1379,
    "name": " 问卷调查",
    "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20221208\/DGqIMgdXxnMu6dslOh2IA76rbyY2zHzr0mbsm13U.jpg",
    "source_type": 0,
    "jump_url": "\/pages\/form-view\/form-view?id=40&v=1668741487fjtzFR",
    "jump_type": 4,
    "type": 0,
    "category_ids": "40",
    "base_url": "\/pages\/form-view\/form-view?id=40&v=1668741487fjtzFR"
}, {
    "id": 3512,
    "component_id": 1379,
    "name": "单招成绩查询",
    "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20221208\/OrKF5jsHLyGopl4AEtzcfWNlsfX8bYPjEfpFnLhm.jpg",
    "source_type": 0,
    "jump_url": "\/pages\/admission-query\/admission-query?type=6",
    "jump_type": 2,
    "type": 0,
    "category_ids": "6",
    "base_url": "\/pages\/admission-query\/admission-query?type=6"
}, {
    "id": 3513,
    "component_id": 1379,
    "name": "联系我们",
    "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20221208\/3VHMyGOg0dBxzChRQpELFR1ntUCLqVaFd9J879zP.jpg",
    "source_type": 0,
    "jump_url": "\/prepare\/mixture\/mixture?aid=13",
    "jump_type": 3,
    "type": 0,
    "category_ids": "0",
    "base_url": "\/prepare\/mixture\/mixture?aid=13"
}]

navs.map(nav => {
    return {
        name:nav.name,
        jump_url: nav.jump_url,
        jump_type: nav.jump_type,
        type: nav.type,
        base_url: nav.base_url
    }
}).forEach(nav => {
    axios.post('http://localhost:1337/api/navs', {"data": nav})
        .then(response => {
            console.log('Response data:', response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
})

const FormData = require('form-data');

async function downloadFile(url) {
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'arraybuffer',
    });

    return {
        buffer: response.data,
        mimeType: response.headers['content-type'],
        fileName: url.split('/').pop(), // Extracts the file name from the URL
    };
}

async function uploadFileToStrapi(fileBuffer, mimeType, fileName) {
    const form = new FormData();
    form.append('files', fileBuffer, {
        filename: fileName,
        contentType: mimeType,
    });

    const response = await axios.post('http://localhost:1337/upload', form, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIyMTc3NDg1LCJleHAiOjE3MjQ3Njk0ODV9.9aZgWC8_zMlWRvQBH1MCusVrxd6gbyoiYbN_uYeW8z4',
            ...form.getHeaders(),
        },
    });

    console.log(response.data);
}

async function upload(mediaUrl) {
    try {
        const fileUrl = mediaUrl; // Replace with your file URL

        // Step 1: Download the file from the URL
        const { buffer, mimeType, fileName } = await downloadFile(fileUrl);
        console.log('File downloaded successfully');

        // Step 2: Upload the downloaded file to Strapi
        await uploadFileToStrapi(buffer, mimeType, fileName);
        console.log('File uploaded successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

navs.forEach(nav => {
    upload(nav.image_url)
})


const axios = require("axios");
const mediaResources = [{
    "id": 3514,
    "component_id": 1380,
    "name": "校园VR",
    "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20221208\/rF1QFEIJsOkL4g3ZuVqmCLHudnulnvMDpa7PByyb.gif?x-oss-process=image\/resize,h_400,w_700\/auto-orient,1\/quality,Q_80",
    "source_type": 0,
    "jump_url": "https:\/\/www.720pai.net\/tour\/089536f29055c489",
    "jump_type": 5,
    "type": 0,
    "category_ids": "0",
    "base_url": "https:\/\/www.720pai.net\/tour\/089536f29055c489"
},{
    "id": 3515,
    "component_id": 1381,
    "name": "校园风光",
    "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20221208\/8lO3eA6FVaPSZGjTf3BZZ6SWmUH4aKhARe5mjj2w.jpg?x-oss-process=image\/resize,h_400,w_700\/auto-orient,1\/quality,Q_80",
    "source_type": 0,
    "jump_url": "\/pages\/campus-scenery\/campus-scenery",
    "jump_type": 3,
    "type": 0,
    "category_ids": "0",
    "base_url": "\/pages\/campus-scenery\/campus-scenery"
}, {
    "id": 3516,
    "component_id": 1381,
    "name": "宣传视频",
    "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20221208\/xUDJB2WwvCw24tTFL68S4jPVhqCzQSjBOxjvj77P.jpg?x-oss-process=image\/resize,h_400,w_700\/auto-orient,1\/quality,Q_80",
    "source_type": 0,
    "jump_url": "\/prepare\/mixture\/mixture?vid=1,2,4,5",
    "jump_type": 3,
    "type": 0,
    "category_ids": "3,3,3,0,0,0,0",
    "base_url": "\/prepare\/mixture\/mixture?vid=1,2,4,5"
}]


mediaResources.map(item => {
    return {
        name: item.name,
        source_type: item.source_type,
        jump_url: item.jump_url,
        jump_type: item.jump_type,
        type: item.type,
        category_ids: item.category_ids,
        base_url: item.base_url
    }
}).forEach(item => {
    axios.post('http://localhost:1337/api/media-resources', {"data": item})
        .then(response => {
            console.log('Response data:', response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
})