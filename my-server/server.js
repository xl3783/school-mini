// 引入 Express
const express = require('express');
const {intro, articles, specialtys, faculty} = require("./data");
const app = express();

// 设置端口号
const PORT = process.env.PORT || 3000;

// 中间件，用于解析 JSON 请求体
app.use(express.json());

// 创建一个简单的 GET 路由
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/miniapp/userInfo', (req, res) => {
    res.send({
        "errcode": 0,
        "errmsg": "ok",
        "data": {
            "avatarUrl": "",
            "name": "111",
            "id": 35150,
            "phone": "",
            "is_teacher": 0,
            "is_faculty": 0
        }
    });
});

app.get('/miniapp/intro', (req, res) => {
    res.send(intro);
});

app.get('/miniapp/article/460', (req, res) => {
    res.send(articles['460']);
});

app.get('/miniapp/faculty/specialty/24', (req, res) => {
    console.log(specialtys['24'])
    res.send(specialtys['24']);
});

app.get('/miniapp/faculty/5', (req, res) => {
    res.send(faculty['5']);
});

// app.get('/miniapp/specialty', (req, res) => {
//     res.send(specialtys['22']);
// });

app.get('/miniapp/home', (req, res) => {
    res.send({
        "errcode": 0,
        "errmsg": "ok",
        "components": [{
            "id": 1383,
            "type": 6,
            "position": 7,
            "is_float": 0,
            "extend": "null",
            "style_code": 1,
            "connectConfig": [{
                "name": "招生电话",
                "value": "0716-8022266",
                "type": 1
            }, {
                "name": "",
                "value": "",
                "type": 4
            }, {
                "name": "咨询QQ",
                "value": "https:\/\/webpage.qidian.qq.com\/2\/chat\/h5\/index.html?linkType=1&env=ol&kfuin=3009112113&fid=806&key=44fd2a4ca4e14d53989bcb1e1cebe225&cate=7&source=0&isLBS=0&isCustomEntry=0&type=10&ftype=1&_type=wpa&qidian=true&translateSwitch=0&isSsc=0&roleValue=1&roleData=13469",
                "type": 3
            }],
            "image_url_full": "https:\/\/cos.schoolpi.net\/uploads\/icon\/20201116\/42ec1c2ffaabdcfe3dad9b1b8706bbca.png",
            "is_customer": 0,
            "is_msg": 0,
            "is_phone": 0,
            "is_phone2": 0,
            "is_phone3": 0,
            "is_vx": 0,
            "phone": "",
            "phone2": "",
            "phone3": "",
            "vx": "",
            "icon_url": "https:\/\/cos.schoolpi.net\/uploads\/icon\/20201116\/42ec1c2ffaabdcfe3dad9b1b8706bbca.png"
        }, {
            "id": 1377,
            "type": 1,
            "position": 1,
            "is_float": 0,
            "extend": null,
            "style_code": 1,
            "is_show_logo": 1,
            "title": "荆州职业技术学院",
            "height_type": 3,
            "align": 2,
            "style": 2,
            "title_type": 1,
            "is_show_name": 1,
            "content": [{
                "id": 3502,
                "component_id": 1377,
                "name": "",
                "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20221208\/c3rYQnO91JrJ6vJJ66W3VWJ7UHqh4z6em4MJWIcX.jpg?x-oss-process=image\/resize,h_400,w_750\/auto-orient,1\/quality,Q_80",
                "source_type": 0,
                "jump_url": "\/pages\/campus-intro\/campus-intro",
                "jump_type": 1,
                "type": 0,
                "category_ids": "0",
                "base_url": "\/pages\/campus-intro\/campus-intro"
            }, {
                "id": 3503,
                "component_id": 1377,
                "name": "",
                "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/cklmnoprsuvwyBCEFGJKMNVXYZ013479.jpeg?x-oss-process=image\/resize,h_400,w_750\/auto-orient,1\/quality,Q_80",
                "source_type": 0,
                "jump_url": "..\/..\/pages\/scores\/scores",
                "jump_type": 1,
                "type": 0,
                "category_ids": "3",
                "base_url": "\/pages\/scores\/scores"
            }, {
                "id": 3504,
                "component_id": 1377,
                "name": "",
                "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220408\/bdghikmrsuvwxyzCEFHLMNOPRTVYZ034.jpeg?x-oss-process=image\/resize,h_400,w_750\/auto-orient,1\/quality,Q_80",
                "source_type": 0,
                "jump_url": "..\/..\/pages\/campus-address\/campus-address",
                "jump_type": 1,
                "type": 0,
                "category_ids": "8",
                "base_url": "\/pages\/campus-address\/campus-address"
            }]
        }, {
            "id": 1378,
            "type": 2,
            "position": 2,
            "is_float": 0,
            "extend": null,
            "style_code": 1,
            "style": 1,
            "num": 2,
            "icon_url_full": "https:\/\/xiaopai-saas.oss-cn-hangzhou.aliyuncs.com\/uploads\/icon\/20201113\/960026828109cf3390282f7fee0fc474.png?OSSAccessKeyId=LTAIJbbx6rjek23Z&Expires=1610447865&Signature=kKEQ3Wxk8jdDEn09J3VifXtXGJI%3D",
            "icon_type": 0,
            "image_url_full": "https:\/\/cos.schoolpi.net\/uploads\/icon\/20220318\/abcdfghijkuwxyBCDGHKLNRTWZ013579.jpeg",
            "icon_url": "https:\/\/cos.schoolpi.net\/uploads\/icon\/20220318\/abcdfghijkuwxyBCDGHKLNRTWZ013579.jpeg",
            "content": [{
                "id": 460,
                "title": "被国家一流研究院录取，荆州一高职生实现人生逆袭！",
                "column_id": "3",
                "type": 1,
                "is_jump": 0,
                "jump_url": "https:\/\/mp.weixin.qq.com\/s\/SKS3Ws10INURp06tIpAqIg",
                "is_top": 1,
                "show_app": "[1, 8]",
                "create_time": "2024-06-15 17:15:24"
            }, {
                "id": 459,
                "title": "荆州职业技术学院 2024年高职单招考试成绩查询",
                "column_id": "3",
                "type": 1,
                "is_jump": 0,
                "jump_url": "",
                "is_top": 1,
                "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                "create_time": "2024-04-04 15:07:49"
            }]
        }, {
            "id": 1379,
            "type": 3,
            "position": 3,
            "is_float": 0,
            "extend": null,
            "style_code": 1,
            "line_show_style": 1,
            "style": 1,
            "line_num": 4,
            "font_size": 26,
            "content": [{
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
        }, {
            "id": 1380,
            "type": 4,
            "position": 4,
            "is_float": 0,
            "extend": null,
            "style_code": 1,
            "line_num": 1,
            "line_show_style": 0,
            "style": 1,
            "title": "",
            "title_show": 2,
            "content": [{
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
            }]
        }, {
            "id": 1381,
            "type": 4,
            "position": 5,
            "is_float": 0,
            "extend": null,
            "style_code": 1,
            "line_num": 2,
            "line_show_style": 0,
            "style": 1,
            "title": "",
            "title_show": 2,
            "content": [{
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
        }, {
            "id": 1382,
            "type": 9,
            "position": 6,
            "is_float": 0,
            "extend": null,
            "style_code": 1,
            "img_position": 2,
            "show_create_time": 1,
            "load_type": 2,
            "num": 10,
            "data": [{
                "name": "招生信息",
                "category_ids": "3",
                "type": 1,
                "content": [{
                    "id": 460,
                    "title": "被国家一流研究院录取，荆州一高职生实现人生逆袭！",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20240615\/VEOnQQvaCcBlY8oJKT9EGGyJu8hmm5HapMgPZSar.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 0,
                    "jump_url": "https:\/\/mp.weixin.qq.com\/s\/SKS3Ws10INURp06tIpAqIg",
                    "is_top": 1,
                    "create_time": "2024-06-15",
                    "show_app": "[1, 8]",
                    "column_id": "3"
                }, {
                    "id": 459,
                    "title": "荆州职业技术学院 2024年高职单招考试成绩查询",
                    "type": 1,
                    "thumb_url": "",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 1,
                    "create_time": "2024-04-04",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "3"
                }, {
                    "id": 458,
                    "title": "2024年单独考试招生:智能网联汽车技术专业职业技能测试大纲",
                    "type": 1,
                    "thumb_url": "",
                    "is_jump": 2,
                    "jump_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/doc\/20240318\/22b0298776a28b97022e19a515c9f188.docx",
                    "is_top": 0,
                    "create_time": "2024-03-18",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "3"
                }, {
                    "id": 457,
                    "title": "2024年单独考试招生:应用化工技术专业职业技能测试大纲",
                    "type": 1,
                    "thumb_url": "",
                    "is_jump": 2,
                    "jump_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/doc\/20240318\/71a4f8f743a013b1fe6eb0cec70a9297.docx",
                    "is_top": 0,
                    "create_time": "2024-03-18",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "3"
                }, {
                    "id": 456,
                    "title": "2024年单独考试招生:文化素质测试大纲",
                    "type": 1,
                    "thumb_url": "",
                    "is_jump": 2,
                    "jump_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/doc\/20240318\/ba71da8a3b46168c103c58ee1e5c3ea6.doc",
                    "is_top": 0,
                    "create_time": "2024-03-18",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "3"
                }, {
                    "id": 455,
                    "title": "2024年单独考试招生:人力资源管理专业职业技能测试大纲",
                    "type": 1,
                    "thumb_url": "",
                    "is_jump": 2,
                    "jump_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/doc\/20240318\/8ea3377495cce10e3d5836b8b13fa698.doc",
                    "is_top": 0,
                    "create_time": "2024-03-18",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "3"
                }, {
                    "id": 454,
                    "title": "2024年单独考试招生:酿酒技术专业职业技能测试大纲",
                    "type": 1,
                    "thumb_url": "",
                    "is_jump": 2,
                    "jump_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/doc\/20240318\/27468e875eb788b27559878429e15bb2.docx",
                    "is_top": 0,
                    "create_time": "2024-03-18",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "3"
                }, {
                    "id": 453,
                    "title": "2024年单独考试招生:服装与服饰设计专业职业技能测试大纲",
                    "type": 1,
                    "thumb_url": "",
                    "is_jump": 2,
                    "jump_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/doc\/20240318\/65f23d2241b21f6aed93964f2c04f6fe.docx",
                    "is_top": 0,
                    "create_time": "2024-03-18",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "3"
                }, {
                    "id": 452,
                    "title": "荆州职业技术学院2024年单独考试招生简章",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20240314\/wpQo45zO2Jjd4tgqce05w55bL1hMmIX3FPywGhuy.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2024-03-14",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "11,3"
                }, {
                    "id": 451,
                    "title": "2023新生报到即问即答",
                    "type": 1,
                    "thumb_url": "",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2023-08-23",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "11,4,3"
                }]
            }, {
                "name": "就业信息",
                "category_ids": "4",
                "type": 1,
                "content": [{
                    "id": 451,
                    "title": "2023新生报到即问即答",
                    "type": 1,
                    "thumb_url": "",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2023-08-23",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "11,4,3"
                }, {
                    "id": 429,
                    "title": "我校与荆州经开区签署战略合作协议",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/FoXk38YizRmwnfXxhoCg2lrPSBESLr0XXOYigXma.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2023-04-19",
                    "show_app": "[1, 2, 3, 4, 5, 8]",
                    "column_id": "4"
                }, {
                    "id": 430,
                    "title": "荆州纺织服装职业教育联盟在荆州职业技术学院成立",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/YEK1eNQeSc4JTvT3riQGOR3JNn09MwCkZb1yGYvK.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2023-04-17",
                    "show_app": "[1, 2, 3, 4, 5, 8]",
                    "column_id": "4"
                }, {
                    "id": 431,
                    "title": "我校举办2023年医护类专场校园招聘会",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/etW7HG1cKi02GbY0aQLQ9NBYsqufvy70QwmkI47K.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2023-04-13",
                    "show_app": "[1, 2, 3, 4, 5, 8]",
                    "column_id": "4"
                }, {
                    "id": 432,
                    "title": "学校举行“湖北江瀚新材” 订单班开班仪式",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/Xkgf4CaJs4vQtSOSb7cWv5HM33DAAXU30kFeBx90.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2023-04-04",
                    "show_app": "[1, 2, 3, 4, 5, 8]",
                    "column_id": "4"
                }, {
                    "id": 428,
                    "title": "【“访企拓岗”进行时】校长周文率队前往荆州市​中医医院考察交流",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/k6ndSzrozoifMQdiy7wmFkW0FTwWnPKmvooIlByA.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2023-03-13",
                    "show_app": "[1, 2, 3, 4, 5, 8]",
                    "column_id": "4"
                }, {
                    "id": 427,
                    "title": "【“访企拓岗”进行时】党委书记杨冰赴美的荆州产业园考察调研",
                    "type": 1,
                    "thumb_url": "",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2023-03-09",
                    "show_app": "[1, 2, 3, 4, 5, 8]",
                    "column_id": "4"
                }, {
                    "id": 426,
                    "title": "【“访企拓岗”进行时】校长周文率队前往武汉开展访企拓岗行动",
                    "type": 1,
                    "thumb_url": "",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2023-03-03",
                    "show_app": "[1, 2, 3, 4, 5, 8]",
                    "column_id": "4"
                }, {
                    "id": 425,
                    "title": "【“访企拓岗”进行时】党委书记杨冰率队赴荆大（荆州）汽车配件有限公司走访调研",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/xLOblpYVvGt4Hd09nQpRjwQN5zPVoYr0yN4i2vJ7.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2022-12-05",
                    "show_app": "[1, 2, 3, 4, 5, 8]",
                    "column_id": "4"
                }, {
                    "id": 424,
                    "title": "【“访企拓岗”进行时】党委书记杨冰率队赴联仕（湖北）新材料有限公司走访调研",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/c10xkNz8AFzxxcu0N2px30GYXOHTWFmgH8rpPjXk.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2022-11-14",
                    "show_app": "[1, 2, 3, 4, 5, 8]",
                    "column_id": "4"
                }]
            }, {
                "name": "学校新闻",
                "category_ids": "1",
                "type": 1,
                "content": [{
                    "id": 433,
                    "title": "沸腾啦！！羽毛球世界冠军谌龙走进荆职校园",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230525\/Zy2EUsmLGmIzzShAYhV6G4Zz8qIhho0Cx3VLHqjA.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 1,
                    "jump_url": "https:\/\/mp.weixin.qq.com\/s\/hatuq6RGGrUh8qej5i7j_w",
                    "is_top": 1,
                    "create_time": "2023-05-25",
                    "show_app": "[1, 8]",
                    "column_id": "1"
                }, {
                    "id": 411,
                    "title": "荆州本地政校企共同打造的首家专精特新产业学院揭牌",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230421\/mOUsYLR7lbYGzSQ2BmsEa4daVqHBIU9tKTuSrvjh.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 1,
                    "create_time": "2023-04-20",
                    "show_app": "[1, 2, 3, 4, 5, 8]",
                    "column_id": "1"
                }, {
                    "id": 408,
                    "title": "速来围观！汽车文创园，你打卡了吗？",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230417\/0Zi3DPVyUNWu9xivzvST84x8iEYMZQl9i3rjwNHz.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 1,
                    "jump_url": "https:\/\/mp.weixin.qq.com\/s\/XO3cGMOm-DirbBrDAq04xQ",
                    "is_top": 1,
                    "create_time": "2023-04-14",
                    "show_app": "[1, 8]",
                    "column_id": "1"
                }, {
                    "id": 409,
                    "title": "我们都是追“锋”少年",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230417\/oJIXjgPH79kM4EBQYYsEXBfac4m5fYuz3KcJRzKr.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 1,
                    "jump_url": "https:\/\/mp.weixin.qq.com\/s\/yb2GyoW3u-gCoRATDtAFyQ",
                    "is_top": 1,
                    "create_time": "2023-04-10",
                    "show_app": "[1, 8]",
                    "column_id": "1"
                }, {
                    "id": 449,
                    "title": "【清廉荆职】学校“纪检委员讲廉洁微党课”决赛圆满结束",
                    "type": 1,
                    "thumb_url": "",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2023-06-30",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "1"
                }, {
                    "id": 448,
                    "title": "学校举行庆祝中国共产党成立102周年 暨“七一”表彰大会",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230703\/ZYfi8a3kkiba4mZKJbz4cjxXDjgbIGulZtlNRCJa.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2023-06-30",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "1"
                }, {
                    "id": 447,
                    "title": "学校参加龙舟公开赛(湖北·荆州站)暨荆州第六届运动会龙舟赛开幕式演出",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230703\/pXN17hvJSoXSqbQtP33NeXQPIVjNXq4JwNwkGUka.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2023-06-21",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "1"
                }, {
                    "id": 446,
                    "title": "荆州职业技术学院党委理论学习中心组2023年春季学期第六次集中学习",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230703\/vJ4UgTDT8iLcVkXn5iIEGgAWdCfgnJOxO9ySF0aZ.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2023-06-19",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "1"
                }, {
                    "id": 444,
                    "title": "【访企拓岗】杨冰带队开展访企拓岗促就业专项行动",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230617\/qJUsrfG6izuZb6SXf6Npqx9W8QrFc2xlcsQW5Obf.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2023-06-17",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "1"
                }, {
                    "id": 443,
                    "title": "【访企拓岗】潘莉带队开展访企拓岗促就业专项行动",
                    "type": 1,
                    "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230617\/x1uk8bp7RUQXMslqBZpBfHa4LGD0WEqntPREgaw4.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
                    "is_jump": 0,
                    "jump_url": "",
                    "is_top": 0,
                    "create_time": "2023-06-14",
                    "show_app": "[1, 2, 3, 4, 5, 8, 9]",
                    "column_id": "1"
                }]
            }]
        }],
        "total": 7,
        "score_list": 2,
        "score_style": 1,
        "is_get_phone": 0,
        "enroll_plan_style": 1,
        "enroll_plan_list": 2,
        "major_intro_style": 2,
        "is_showall": 0,
        "live_list": 1,
        "title_name": "智慧招生平台",
        "title_position": 2,
        "color": "#4a90e2",
        "logo": "https:\/\/cos.schoolpi.net\/uploads\/27\/20221208\/uNCQe1h54ZLsC7pgVvDciI5tyqnK71fLCgSYdwuR.jpg",
        "is_collect": 0,
        "no_mourn": 1,
        "name": "荆州职业技术学院",
        "alumni": 0
    }
    );
});

app.get('/miniapp/home/config', (req, res) => {
    res.send({
        "errcode": 0,
        "errmsg": "ok",
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
        "logo": "https:\/\/cos.schoolpi.net\/uploads\/27\/20221208\/uNCQe1h54ZLsC7pgVvDciI5tyqnK71fLCgSYdwuR.jpg",
        "is_collect": 0,
        "name": "荆州职业技术学院",
        "enroll_type": 1,
        "is_show_support": 1,
        "is_privacy": 0
    });
});

app.get('/miniapp/faculty', (req, res) => {
    res.send(
        {
            "errcode": 0,
            "errmsg": "ok",
            "list": [{
                "id": 4,
                "name": "智能制造学院",
                "pid": 0,
                "type": 1,
                "sort": 1,
                "intro_type": 1,
                "intro_text": "<p data-id=\"pb328303-XTAAOG1l\" style=\"text-indent: 21pt; line-height: 2;\"><span style=\"font-size: 13px;\">☆国家骨干专业：机电一体化技术<\/span><\/p><p data-id=\"pb328303-UiB6bEhJ\" style=\"text-indent: 21pt; line-height: 2;\"><span style=\"font-size: 13px;\">☆全国数控技能人才培养工程高职院校协作会常务理事单位<\/span><\/p><p data-id=\"pb328303-icECmYHM\" style=\"text-indent: 21pt; line-height: 2;\"><span style=\"font-size: 13px;\">☆湖北省人力资源与社会保障厅批准的国家职业技能鉴定单位<\/span><\/p><p data-id=\"pb328303-KoZWhmmL\" style=\"text-indent: 21pt; line-height: 2;\"><span style=\"font-size: 13px;\">☆湖北省首家“海尔智能化学院”建成单位<\/span><\/p><p data-id=\"pb328303-fT8W8oNB\" style=\"text-indent: 21pt; line-height: 2;\"><span style=\"font-size: 13px;\">☆中央财政支持国家电工电子实训基地<\/span><\/p><p data-id=\"pb328303-fBdT5jc5\" style=\"text-indent: 21pt; line-height: 2;\"><span style=\"font-size: 13px;\">☆中央财政支持国家数控技术实训基地<\/span><\/p>",
                "intro_url": "",
                "is_del": 0,
                "create_time": "2022-06-10 16:54:18",
                "update_time": "2024-06-14 18:08:13",
                "cooperation_college": "",
                "image_url": "",
                "child": [],
                "specialties": [{
                    "id": 22,
                    "name": "工业机器人技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-bapcuxqx6rs00\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业主要培养能够从事工业机器人应用系统集成、工业机器人应用系统运行维护、自动化控制系统安装调试、销售与技术支持等工作的技术技能人才。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-1f5mzceo8gkg0\"><span style=\"font-size: 13px;\"><strong>培养目标:<\/strong>工业机器人业面向工业机器人制造企业、系统集成企业，培养具备扎实的工程实践基础、良好的职业道德、较强的可持续发展能力，掌握工业机器人集成设计、编程操作、维护管理、调试维修等专业知识与技能，并能与专门领域要求相结合具有工匠精神的德、智、体、美、劳全面发展的复合型技术技能人才。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-19yxxdtnrzpc0\"><span style=\"font-size: 13px;\"><strong>就业面向:<\/strong>引领新兴产业优势，面向中国制造2025，满足智能制造领域工业机器人及其智能装备的所有高端技术岗位。专业技术应用领域非常广泛，企业人才需求急迫。主要涉及电子电气行业、汽车工业、机械及IC装备行业、航空航天、轨道交通、国防军工、物流、烟草、食品、医药、纺织、木材与家具制造业等众多行业。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-r0t3pojtkls0\"><span style=\"font-size: 13px;\"><strong>就业岗位:<\/strong>就业岗位主要有两个方面：<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-1fzubigbqcps0\"><span style=\"font-size: 13px;\">一是从事技术岗位：机器人运行维护与管理；机器人维修调试；机器人工作站设计与安装。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-refnfglbagw0\"><span style=\"font-size: 13px;\">二是开展销售客服服务：机器人销售工程师；售后客服工程师。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-xcxao94p40g0\"><span style=\"font-size: 13px;\"><strong>获得成绩:<\/strong>2017年湖北省职业院校技能大赛中获工业机器人应用技术赛项一等奖，并代表湖北省参加2018年全国比赛获得三等奖；2018年湖北省职业院校技能大赛中抽测队获得二等奖；2019年湖北省职业院校技能大赛中推荐队获得三等奖。<\/span><\/p>",
                    "pivot": {
                        "id": 22,
                        "faculty_id": 4,
                        "specialty_id": 22
                    }
                }, {
                    "id": 23,
                    "name": "机电一体化技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 2em;\" data-id=\"p99zltr6o-kyw6lh7c3vk00\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业是国家骨干专业，拥有电工电子技术和数控技术两个国家级实训基地；2023年获批工信部首批专精特新产业学院。本专业就业领域有：所有制造企业及机电设备销售企业。<\/span><\/p><p style=\"text-indent: 2em;\" data-id=\"p99zltr6o-5yf3la5txp000\"><span style=\"font-size: 13px;\"><strong>培养目标:<\/strong>本专业培养理想信念坚定，德、智、体、美、劳全面发展，具有一定的科学文化水平，良好的人文素养、职业道德和创新意识，精益求精的工匠精神，较强的就业能力和可持续发展的能力；掌握本专业知识和技术技能，面向通用设备制造业，金属制品、机械和设备修理业的设备工程技术人员、机械设备修理人员等职业群，能够从事自动生产线运维、工业机器人应用、机电一体化设备生产管理、销售和技术支持、技改、维修工作的复合型技术技能人才。<\/span><\/p><p style=\"text-indent: 2em;\" data-id=\"p99zltr6o-5xd31ftb15c00\"><span style=\"font-size: 13px;\"><strong>就业面向:<\/strong>本专业毕业生毕业之后，一方面可以直接就业(本专业就业领域：所有制造企业及机电设备销售企业;初始岗位：机床操作工，工业机器人或自动化生产线的安装、调试及维修工，机电设备销售；发展岗位：机电工程师、技术管理岗位、销售管理岗位);另一方面还可以进入本科院校继续深造学习，其对接专业有机电一体化、机械制造与设计等专业。<\/span><\/p>",
                    "pivot": {
                        "id": 23,
                        "faculty_id": 4,
                        "specialty_id": 23
                    }
                }, {
                    "id": 21,
                    "name": "机械装备制造技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-6wipdxow9h000\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业主要培养能够从事机械装备制造、安装调试、维护维修、生产现场管理、售后服务等工作的技术技能人才。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-dkcbs2fy9lc00\"><span style=\"font-size: 13px;\"><strong>培养目标:<\/strong>本专业培养理想信念坚定，德、智、体、美、劳全面发展，具有一定的科学文化水平，良好的人文素养、职业道德和创新意识，精益求精的工匠精神，较强的就业能力和可持续发展的能力，掌握本专业基本知识和技术技能，面向通用设备制造业和专用设备制造业领域的<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-zood3ynjmxc\"><span style=\"font-size: 13px;\">安装调试、维护维修等职业岗位群，能够从事机械装备安装调试、维护维修、售后服务等工作的复合型技术技能人才。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-3t6nckj610w00\"><span style=\"font-size: 13px;\"><strong>就业面向：<\/strong>就业领域：汽车制造、船舶军工、机械制品、电子通讯、物流仓储、生物医药、食品饮料等因生产需要应用柔性自动化生产线、工业机器人等智能设备的各个行业企业。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-12c9s0ijwixs0\"><span style=\"font-size: 13px;\"><strong>初始岗位：<\/strong>机电设备管理的安装与调试、管理与维修、销售与技术服务、机械加工工艺编制、数控机床的操作与维护、机电产品生产制造及生产一线管理。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-agt70jwagr400\"><span style=\"font-size: 13px;\"><strong>发展岗位：<\/strong>智能高端设备、工业机器人设备的运行维护、编程调试、安装维修、销售客服、管理、设计人才。<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-1no1ba63ww3k0\"> <\/p>",
                    "pivot": {
                        "id": 21,
                        "faculty_id": 4,
                        "specialty_id": 21
                    }
                }, {
                    "id": 18,
                    "name": "模具设计与制造",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-4hltfh6kjp4000\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业是学校首批重点建设的专业。办学时间长，教学资源丰富，办学规模稳定，教学成果丰硕，毕业生就业率98%以上。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-6672ygtrzug00\"><span style=\"font-size: 13px;\"><strong>培养目标：<\/strong>本专业培养理想信念坚定，德、智、体、美、劳全面发展，具有一定的科学文化水平，良好的人文素养、职业道德和创新意识，精益求精的工匠精神，较强的就业能力和可持续发展的能力；掌握本专业知识和技术技能，面向专用设备制造业的机械工程技术人员、工装工<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-hrpyjvyudi00\"><span style=\"font-size: 13px;\">具制造人员等职业群，能够从事模具设计、成形（型）工艺、数控编程、产品检验和质量管理工作的复合型技术技能人才。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-g6udxox5ba800\"><span style=\"font-size: 13px;\"><strong>就业面向:<\/strong>本专业的毕业生重点培养模具设计与制造、机械加工工艺编制、机床设备操作和经营管理等基本能力。主要从事模具设计、模具制造、装配、调试等工作，也可以继续深造，进行本科阶段甚至研究生阶段的学习。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-3d97z5zffse00\"><span style=\"font-size: 13px;\"><strong>就业领域：<\/strong>模具制造企业、机电产品制造企业、汽车制造企业、军工企业、电子电器企业等。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-f4dlt2ikt2800\"><span style=\"font-size: 13px;\"><strong>初始岗位：<\/strong>模具制图员、产品工艺员、数控机床操作工、电火花机床操作工、冲压机和注塑成型机操作工、质检员、销售员。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-g5r0cl47ejc00\"><span style=\"font-size: 13px;\"><strong>发展岗位：<\/strong>模具工程师、产品成型工艺分析师、模具装配与调试员、产品研发。<\/span><\/p>",
                    "pivot": {
                        "id": 18,
                        "faculty_id": 4,
                        "specialty_id": 18
                    }
                }, {
                    "id": 17,
                    "name": "数控技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p1dr9j7ls-46g28dsjz4a000\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业培养具备数控设备操作、装调、维修、管理能力，能够从事数控设备操作、机械加工工艺编制与实施、数控编程、质量检验等工作的技术技能人才。<\/span><\/p><p data-id=\"p1dr9j7ls-1db0p6iskr4w00\"><span style=\"font-size: 13px;\"><strong>培养目标：<\/strong>本专业落实立德树人根本任务，培养理想信念坚定，德智体美劳全面发展，具有一定的科学文化水平，良好的审美和人文素养、职业道德，精益求精的工匠精神，较强的职业适应能力和可持续发展的能力；掌握数控机床的基本理论知识和应用技术，面向通用设备制造业、专业设备制造业的机械工程技术人员、机械冷加工人员、机械设备装配人员等职业群，能够从数控设备操作、机械加工工艺编制与实施、数控编程、质量检验等工作的复合型技术技能人才。<\/span><\/p><p data-id=\"p1dr9j7ls-279c4zmo2pa800\"><span style=\"font-size: 13px;\"><strong>就业面向：<\/strong>本专业的毕业生主要培养数控机床操作能力、数控加工编程能力、数控机床维修能力，三至五年后能从事设计层面的工作。<\/span><\/p><p data-id=\"p1dr9j7ls-5ua9ivy3ve8000\"><span style=\"font-size: 13px;\">就业职业领域：机械制造企业和机床制造维修企业。<\/span><\/p><p data-id=\"p1dr9j7ls-3x5oyj0omui000\"><span style=\"font-size: 13px;\">主要工作岗位群：数控机床操作工、数控机床调试维修工、数控加工编程师、产品检验质量管理员等。<\/span><\/p><p data-id=\"p1dr9j7ls-njnz4d8como00\"><span style=\"font-size: 13px;\">湖北恒隆集团：中国汽车零部件转向器行业龙头企业，拥有一家美国上市公司，三家境内外投资公司，二十家控股成员企业，涉足汽车零部件、装备和商贸等领域，销售收入45.8亿元。<\/span><\/p>",
                    "pivot": {
                        "id": 17,
                        "faculty_id": 4,
                        "specialty_id": 17
                    }
                }, {
                    "id": 19,
                    "name": "建筑智能化工程技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p1dr9j7ls-gqt47i5p41k00\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业培养理想信念坚定，德、智、体、美、劳全面发展，具有一定的科学文化水平，良好的人文素养、职业道德和创新意识，精益求精的工匠精神，较强的就业能力和可持续发展的能力，掌握本专业知识和技术技能，面向建筑安装业的建筑工程技术人员职业群（或技术技能领域），能够从事建筑智能化的设计助理、施工、调试、管理与维护等工作的复合型技术技能人才。<\/span><\/p><p data-id=\"p1dr9j7ls-jbkypadg0tc00\"><span style=\"font-size: 13px;\"><strong>就业方向<\/strong><\/span><\/p><p data-id=\"p1dr9j7ls-d6ic8oyymy800\"><span style=\"font-size: 13px;\">建筑施工安装企业智能建筑系统\/子系统的工程技术管理、设备安装、概预算的编制、工程图绘制；智能建筑产品生产公司产品的性能测试、产品销售、产品售前技术支持、安装调试、售后服务等;大中型物业管理企业强弱电系统的运行管理与维护；智能建筑各个子系统（保安、监控、消防等）的运行管理与维护；<\/span><\/p><p data-id=\"p1dr9j7ls-k4liaw57mgg00\"><span style=\"font-size: 13px;\"><strong>就业企业<\/strong><\/span><\/p><p data-id=\"p1dr9j7ls-kgccxp6ev5s00\"><span style=\"font-size: 13px;\">海尔集团、北京北控电信通信息技术有限公司、江苏中科智能工程有限公司、南京东大智能化系统有限公司等<\/span><\/p><p data-id=\"p1dr9j7ls-6i2ji3m46e400\"><span style=\"font-size: 13px;\">本专业依托海尔集团，校企共同出资500万共建实训室，我校在海尔挂牌“海尔智能家居校企合作基地”，海尔在我校挂牌“海尔智能化教学基地”。双方共建“海尔智能家居体验馆”、“海尔智能家居展示馆”、“海尔智能家居系统教学实训室”。<\/span><\/p><p style=\"text-align: center;\" data-id=\"p2krvvzmc-3ofj58swwzc00\"><br><\/p><p data-id=\"p1dr9j7ls-7772fnyjkxo00\"><span style=\"font-size: 13px;\">海尔作为中国智能家居生产的领先企业，推出智能家居建设行业应用技能认证。根据业内实际应用的需求，认证分为三个等级（初级、中级、高级），涵盖设计、管理、施工等。学生通过一定的学习后参加相应专业的技能认证考试，通过认证的人员具备一定的专业应用技能并取得《海尔智能家居行业应用技能认证证书》，个人信息将会被录入至海尔的人才平台库，直接供行业内企业浏览，为企业和学生直接搭建招聘与应聘人才交流平台。<\/span><\/p><p data-id=\"p1dr9j7ls-3f8laocjolm00\"><span style=\"font-size: 13px;\">建筑智能化属于朝阳产业，发展潜力巨大，将会引领建筑行业、智能家居等领域新潮流，人才需求量非常庞大。<\/span><\/p>",
                    "pivot": {
                        "id": 19,
                        "faculty_id": 4,
                        "specialty_id": 19
                    }
                }, {
                    "id": 20,
                    "name": "建筑工程技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"pl2dpji2w-ijxn99o8t9k00\" style=\"line-height: 2;\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业实行双证书制度，除毕业证外，可获得建设部颁发的施工员、质检员、安全员、资料员、造价员等职业技术岗位资格证书。<\/span><\/p><p data-id=\"pl2dpji2w-i38ptv4700800\" style=\"line-height: 2;\"><span style=\"font-size: 13px;\"><strong>培养目标：<\/strong><\/span><\/p><p data-id=\"pl2dpji2w-2vhnucz4f7e00\" style=\"line-height: 2;\"><span style=\"font-size: 13px;\">本专业培养理想信念坚定，德、智、体、美、劳全面发展，具有一定的科学文化水平，良好的人文素养、职业道德和创新意识，精益求精的工匠精神，较强的就业能力和可持续发展的能力；掌握建筑工程技术专业知识和技术技能，面向土木工程建筑业、房屋建筑业等行业的建筑工程技术人员职业群，能够从事建筑工程施工与管理相关工作复合型技术技能型人才。<\/span><\/p><p data-id=\"pl2dpji2w-6j48tuhvcuc00\" style=\"line-height: 2;\"><span style=\"font-size: 13px;\"><strong>就业方向：<\/strong><\/span><\/p><p data-id=\"pl2dpji2w-ft868d7x1w000\" style=\"line-height: 2;\"><span style=\"font-size: 13px;\">主要面向建筑施工企业，以项目施工员为主要就业岗位，以项目质量员、造价员、资料员、安全员等为就业岗位群；面向工程监理企业，从事专业技术监理工作；面向工程造价咨询企业，从事工程预决算等相关工作；面向房地产开发或工程咨询、物业管理企业，从事房地产开发、经营和物业管理等职业岗位工作。<\/span><\/p><p data-id=\"pl2dpji2w-if17u4l5ips00\" style=\"line-height: 2;\"><span style=\"font-size: 13px;\">工作晋升岗位：造价工程师、结构工程师、监理工程师、安全工程师、项目经理、咨询工程师。<\/span><\/p><p data-id=\"pcjixlygo-jh0idwt8atk00\" style=\"line-height: 2; text-align: center;\"><br><\/p>",
                    "pivot": {
                        "id": 20,
                        "faculty_id": 4,
                        "specialty_id": 20
                    }
                }]
            }, {
                "id": 5,
                "name": "新能源汽车学院",
                "pid": 0,
                "type": 1,
                "sort": 2,
                "intro_type": 1,
                "intro_text": "<div class=\"css-rm9irf am-engine\" data-element=\"root\"><p data-id=\"pf486c42-XY44GAbh\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 12px;\"><strong>一、基本情况<\/strong><\/span><\/p><p data-id=\"pf486c42-8e6S5YFN\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 12px;\">新能源汽车学院目前开设汽车检测与维修技术、汽车制造与试验技术、新能源汽车技术、汽车智能技术、智能网联汽车技术等5个专业。<\/span><\/p><p data-id=\"pf486c42-RYn948Ll\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 12px;\"><strong>二、专业情况<\/strong><\/span><\/p><p data-id=\"pf486c42-wylQHWvf\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 12px;\">汽车制造与试验技术专业群是学校优先建设的骨干专业群，专业群涵盖学院所有专业。汽车制造与试验技术专业是国家骨干专业、国家级生产性实训基地、湖北省特色专业、首批现代学徒制试点专业、中德合作办学专业、教育部财政部“高等职业学校提升专业服务产业发展能力”建设专业、“湖北省中高职人才培养一体化改革”试点专业、荆州汽车产业职业教育集团牵头单位；新能源汽车技术专业是国家教学资源库建设单位，国家首“1+X”-智能新能源汽车技能等级证书试点专业、中国智能网联汽车产教融合创新联合体常务理事单位。<\/span><\/p><p data-id=\"pf486c42-NtTUUtNf\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 12px;\"><strong>三、师资情况<\/strong><\/span><\/p><p data-id=\"pf486c42-TtUYsWG5\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 12px;\">新能源汽车学院现有专业群教师61名，楚天技能名师3人、湖北省技术能手2名、教授6人、副教授16人、研究生以上学历36人，具备满足模块化教学需要的结构化教师教学团队。<\/span><\/p><p data-id=\"pf486c42-VH8wV5Tp\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 12px;\"><strong>四、师生各类大赛获奖情况<\/strong><\/span><\/p><p data-id=\"pf486c42-vifyS9G5\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 12px;\">近年来，专业教师5人参加国家汽车类专业教学能力大赛获一等奖第一名2项，二等奖3项；4人次参加湖北省职业院校教师能力大赛，获二等奖1项，三等奖1项。<\/span><\/p><p data-id=\"pf486c42-loSnavGI\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 12px;\">专业学生在2017、2018、2019连续三年蝉联湖北省教育厅主办的高职院校技能大赛汽车检测与维修赛项一等奖；2018年参加教育部主办的全国高职院校技能大赛汽车检测与维修赛项获二等奖；2019年参加湖北省交通运输行业第三届“交通工匠杯”维修工职业技能大赛获学生组一等奖；参加全国汽车类相关行业大赛获二等奖3个，三等奖2个。<\/span><\/p><p data-id=\"pf486c42-6nqkD9gA\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 12px;\"><strong>五、实训条件情况<\/strong><\/span><\/p><p data-id=\"pf486c42-9qnLSi01\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 12px;\">新能源汽车学院建设有3栋总面积6600平方米用于汽车专业实训教学的“双创+实训”车间，1栋总面积4000平方米的新能源汽车技术专业实训大楼，拥有整车60台，设备总价值近3000万元。<\/span><\/p><p data-id=\"pf486c42-k12q1JSI\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 12px;\"><strong>六、社会培训<\/strong><\/span><\/p><p data-id=\"pf486c42-QT5b6BUj\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 12px;\">近年来，新能源汽车学院承担企业横向课题4项，拥有国家发明专利10项。开展社会培训体量大，承接有湖北省职业院校教师素质提升计划汽车制造类专业“课程实施能力提升”项目、中华财险理赔新兵训练营全国培训、荆州市公务用车驾驶员培训，荆州市总工会“金蓝领”汽车维修工培训等各类培训，累计培训近2000人次。<\/span><\/p><\/div>",
                "intro_url": "",
                "is_del": 0,
                "create_time": "2022-06-10 16:54:18",
                "update_time": "2022-06-10 16:54:18",
                "cooperation_college": "",
                "image_url": "",
                "child": [],
                "specialties": [{
                    "id": 24,
                    "name": "汽车检测与维修技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"line-height: 2;\" data-id=\"pl2dpji2w-39zvahd597c000\"><span style=\"font-size: 13px;\"><strong>专业特色<\/strong>：本专业教学模式源于教育部与德国汽车厂商共同实施的“中德职业教育合作汽车机电项目”，对接国际人才培养模式，使学生成为具有国际竞争力的技能型汽车售后服务技术人才。<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-1dahmhr6v8m800\"><span style=\"font-size: 13px;\">本专业面向汽车维修、汽车销售和售后服务一体化企业，以及与汽车运用、汽车维修有关的职业领域的生产、服务、管理一线岗位。学生毕业后能够从事车辆技术服务，在汽车维修、检测等售后服务企业从事检测、诊断、维修、技术管理等工作；在交通运输企事业从事车辆性能检测、管理、调度等工作；在汽车金融机构从事车辆鉴定、评估、理赔工作等，具备一技之长，能在企事业单位从事一线及相应管理工作，依据中德先进职业教育合作项目，培养具有工匠精神的高素质、复合型技术技能人才。<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-4xz5rpmhj6g000\"><span style=\"font-size: 13px;\"><strong>中德先进职业教育合作项目<\/strong>（Sino-German Advanced Vocational Education, 简称<strong>SGAVE<\/strong>）源于教育部与德国大众、奥迪、宝马、戴姆勒、保时捷五大汽车厂商自2010年共同实施的“中德职业教育合作汽车机电项目”。加入汽车检测与维修技术专业，就加入了教育部中德先进职业教育合作（SGAVE）项目，享受最顶级的德国模式培养。<\/span><\/p><p data-id=\"p1dr9j7ls-496of5i6gwo000\"><span style=\"font-size: 13px;\">从2018年-2021年，汽车类专业的学生做了许多高职院校中震惊的大事！<\/span><\/p><p data-id=\"p1dr9j7ls-raaoe0c3ur400\"><span style=\"font-size: 13px;\"><strong>本专业课程建设与国际接轨，学习硬件过硬<\/strong><\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-4a6m6lgnj3y000\"><span style=\"font-size: 13px;\">中德班43名学生，通过德国职业资格证书考试，具备赴德技术移民资格。<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-2z3ol83iqpi000\"><span style=\"font-size: 13px;\">你毕业时可以获取毕业证书和符合国际标准的SGAVE证书，从事汽车检测与维修、运营管理、定损理赔、配件服务、改装美容、<\/span><\/p><p data-id=\"p1dr9j7ls-1qmi63wykfgg00\"><span style=\"font-size: 13px;\"><strong>未来就业渠道宽，覆盖汽车产业前、后市场！！！<\/strong>    <\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-3q14nvylznw000\"><span style=\"font-size: 13px;\">我们在充分利用德国在汽车领域雄厚的技术和经验储备，联合构建符合现代汽车维修和维护行业需求的专业人才培养体系，共同为德国五大汽车生产企业培养具有国际竞争力的技能型汽车技术人才。<\/span><\/p>",
                    "pivot": {
                        "id": 24,
                        "faculty_id": 5,
                        "specialty_id": 24
                    }
                }, {
                    "id": 25,
                    "name": "智能网联汽车技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"line-height: 2;\" data-id=\"pl2dpji2w-1nog77xz7l4w00\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业是中国智能网联汽车产教融合创新联合体常务理事单位，是“1+X”智能网联汽车测试装调职业技能初级证书全国首考单位，深化产教融合协同育人机制，率先共建智能网联汽车产业学院。<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-41rbv5iijuw000\"><span style=\"font-size: 13px;\"><strong>汽车产业被誉为“工业的明珠”，智能驾驶系统被誉为“汽车产业的明珠”。智能网联汽车是汽车发展的未来，带你领略汽车尖端科技的精彩！！！<\/strong><\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-1ith71kgjbc000\"><span style=\"font-size: 13px;\"><strong>智能网联产业生态圈，30多个产业环节，超50万个蓝海岗位。目前高职及应用本科的岗位缺口超50万个，高薪岗位超10万个，预计2025年用人缺口超300万。产业端呼唤面向智能网联时代的新汽车人才！！！<\/strong><\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-1ewx8xitdxwg00\"><span style=\"font-size: 13px;\">全国首考｜“1+X”智能网联汽车测试装调职业技能初级证书考核在荆州职院顺利完成！<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-41oqwd0q74u000\"><span style=\"font-size: 13px;\">湖北省智能网联汽车产业战略布局逐步部署，全力打造智能网联产业生态！！！<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-25fh79qvujcw00\"><span style=\"font-size: 13px;\">深化产教融合协同育人机制，率先共建智能网联汽车产业学院，抓住人才培养的先机，人才垂直就业！<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-2m041e2w826000\"><span style=\"font-size: 13px;\"><strong>智能网联汽车技术专业学生的成长通道<\/strong><\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-1fnikbf7qtxc00\"><span style=\"font-size: 13px;\"><strong>典型企业：<\/strong>华为、华励智行、高新兴、高鸿股份、小鹏、光庭科技、百度、远峰科技、小鹏汽车、百度、高德红外、速腾聚创、镭神智能、禾赛科技等。<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-2nmdvh94xuc000\"><span style=\"font-size: 13px;\"><strong>适配岗位：<\/strong>V2X部署工程师；现场技术支持工程师；售后技术支持工程师；交付工程师感知系统测试工程师；定位与导航系统测试工程师；现场技术支持工程师；智能座舱研发测试工程师等。<\/span><\/p>",
                    "pivot": {
                        "id": 25,
                        "faculty_id": 5,
                        "specialty_id": 25
                    }
                }, {
                    "id": 26,
                    "name": "汽车制造与试验技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"line-height: 2;\" data-id=\"pl2dpji2w-38u0c5wbj52000\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业是国家骨干专业、湖北省特色专业、湖北省立项建设高水平专业群龙头专业，建有国家级生产性实训基地、汽车关键零部件智能制造与技术服务虚拟仿真实训基地，拥有省级职业教育教师创新团队<strong>。<\/strong><\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-2ke4xh8irvm000\"><span style=\"font-size: 13px;\"><strong>国家骨干专业、国家生产性实训基地<br> 湖北省立项建设高水平专业群核心专业<\/strong><\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-17lfoveagoo000\"><span style=\"font-size: 13px;\"><strong><em>对面的同学看过来，看过来，看过来<\/em><em>......<\/em><em>，这边的风景很精彩！<\/em><\/strong><\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-uk0kcwy5xz40\"><span style=\"font-size: 13px;\">★ 这里是我们铸就梦想的舞台<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-438fjdxzvyy000\"><span style=\"font-size: 13px;\">☆ 宽敞、明亮、整洁的汽车实训基地<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-1vr9zuhq8yww00\"><span style=\"font-size: 13px;\">☆ 宏伟的实训大楼，建有先进技术的实训室：智慧教室、虚拟仿真实训室、交互实训室<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-2rn1bya7pxy000\"><span style=\"font-size: 13px;\">★ “厉害了，我的专业”<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-rmzjmaujx9s00\"><span style=\"font-size: 13px;\">☆ 汽车制造与试验技术专业及实训基地是国家骨干专业、国家生产性实训基地，“国字号”就是牛......<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-ssgx9eh14ao00\"><span style=\"font-size: 13px;\">☆ 汽车制造与试验技术专业是湖北省立项建设高水平专业群的核心专业，与世界 500 强企业和荆州汽车零部件企业深度合作。<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-2i81a231jj0000\"><span style=\"font-size: 13px;\">★ 在这里，我们锤炼了技能，增强了本领<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-gv7ju1c127s00\"><span style=\"font-size: 13px;\">☆ 2017-2019年，连续三年，蝉联冠军<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-414u5dknqco000\"><span style=\"font-size: 13px;\">☆ 2018年，国赛竞技，勇夺榜眼。<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-57g54uw85sc000\"><span style=\"font-size: 13px;\">☆ 我们不仅有技能，还有“脑洞大开”，我们把汽车零部件打造成魁梧雄伟的“汽车人”。<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-1wlaesw49fxc00\"><span style=\"font-size: 13px;\">☆ 我们既是是设计师，也是工程师，还是“赛车手”，制造了“起航号”和“引领号”越野车，参加了中国汽车工程学会“巴哈”大赛,广阔天地，任我驰骋。<\/span><\/p><p style=\"line-height: 2;\" data-id=\"pl2dpji2w-4xnrparjwmo000\"><span style=\"font-size: 13px;\">★ 我们的就业前景广阔<\/span><\/p>",
                    "pivot": {
                        "id": 26,
                        "faculty_id": 5,
                        "specialty_id": 26
                    }
                }, {
                    "id": 27,
                    "name": "新能源汽车技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-align: center; line-height: 2;\" data-id=\"pqtw4djkg-1cc2u9w9014000\"><span style=\"font-size: 13px;\">（新能源汽车技术专业国家教学资源库建设单位）<\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-3nj3qjhqj4k000\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业是国家教学资源库建设单位，国家首批“1+X”智能新能源汽车技能等级证书试点专业，专业建设始终坚持产教融合之路，抓实校企合作，建有1个湖北省大师工作室、多个实训基地和产业学院。<\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-3tsz5d86in0000\"><span style=\"font-size: 13px;\"><strong>2007<\/strong><strong>年-2021年，随着新能源汽车的发展，新能源汽车技术专业的学生队伍也在逐渐扩大，大家赶紧加入这个大家庭吧！<\/strong><\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-1u8t00eukdgg00\"><span style=\"font-size: 13px;\"><strong>◆在这里，大学三年有明确的学习轨迹。<\/strong><\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-4lj7s45qpwo000\"><span style=\"font-size: 13px;\"><strong>◇大一，我们给车保养<\/strong><\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-sngh0018aqo00\"><span style=\"font-size: 13px;\"><strong>◇大二，我们给车维修<\/strong><\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-3hivjx1f8v2000\"><span style=\"font-size: 13px;\"><strong>◇大三，我们给车检测、诊断与就业<\/strong><\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-12nkwruu2l0g00\"><span style=\"font-size: 13px;\"><strong>◆合理的课程学习，让我们硕果累累！<\/strong><\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-5s9kbymjo08000\"><span style=\"font-size: 13px;\"><strong>◇2017年，初开新能源汽车的大门，就已佳绩连连！<\/strong><\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-384sbou1yps000\"><span style=\"font-size: 13px;\"><strong>◇2018-2019再接再厉，获得更好成绩！<\/strong><\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-1n07lr96f13400\"><span style=\"font-size: 13px;\"><strong> ◇专业水平不断提升，首批1+X证书制度试点专业--智能新能源汽车。<\/strong> <\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-53knjsvbhd4000\"><span style=\"font-size: 13px;\"><strong>◆这就是大学生活的全部了吗？答案当然是<\/strong><\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-4n4ku0ibl6a000\"><span style=\"font-size: 13px;\"><strong>◇大一、大二，打造汽车文化园，让废弃的汽车零部件焕发活力。<\/strong><\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-wfokj9c46e800\"><span style=\"font-size: 13px;\"><strong>◇大三，我们自己造车参加巴哈大赛<\/strong><\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-v2wmua7n5wg00\"><span style=\"font-size: 13px;\"><strong>◆丰富的学习生活，让我们能更好的地走上工作岗位！<\/strong><\/span><\/p>",
                    "pivot": {
                        "id": 27,
                        "faculty_id": 5,
                        "specialty_id": 27
                    }
                }, {
                    "id": 52,
                    "name": "汽车技术服务与营销",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p1dr9j7ls-c5c23l46swo00\"><strong>专业特色：<\/strong>本专业培养具备汽车技术服务和营销知识的综合性人才。学生通过真实的汽车维修、售后服务和市场营销环境，学习汽车维修技术、售后服务管理、市场营销策划等相关领域的知识，提高实践应用能力。<\/p>",
                    "pivot": {
                        "id": 52,
                        "faculty_id": 5,
                        "specialty_id": 52
                    }
                }]
            }, {
                "id": 3,
                "name": "经济管理学院",
                "pid": 0,
                "type": 1,
                "sort": 3,
                "intro_type": 1,
                "intro_text": "<div class=\"css-rm9irf am-engine\" data-element=\"root\"><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-NF513K80\"><span style=\"font-size: 15px;\"><span style=\"color: #444444;\">★中央财政重点支持建设专业：会计<\/span><\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-Ui7XhSGO\"><span style=\"font-size: 15px;\"><span style=\"color: #444444;\">★省级特色专业：旅游管理<\/span><\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-5Clfo8GE\"><span style=\"font-size: 15px;\"><span style=\"color: #444444;\">★省级品牌专业：会计<\/span><\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-CoJjLQle\"><span style=\"font-size: 15px;\"><span style=\"color: #444444;\">★电子商务国家生产性实训基地<\/span><\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-XVW0CKb2\"><span style=\"font-size: 15px;\"><span style=\"color: #444444;\">★省级实训基地：会计电算化实训基地<\/span><\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-IfjXWTem\"><span style=\"font-size: 15px;\"><span style=\"color: #444444;\">★湖北省电子商务技能名师工作室<\/span><\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-J0dEAcgp\"><span style=\"font-size: 15px;\"><span style=\"color: #444444;\">★中国高教学会秘书学专业委员会副理事长单位<\/span><\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-chPXgUKh\"><span style=\"font-size: 15px;\"><span style=\"color: #444444;\">★全国人力资源和社会保障行指委委员单位<\/span><\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-3AZKbOkR\"><span style=\"font-size: 15px;\"><span style=\"color: #444444;\">★教育部教育类专业教指委文秘专委会副主任单位<\/span><\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-BbGP29Q6\"><span style=\"font-size: 15px;\"><span style=\"color: #444444;\">★湖北省首批旅游人才开发示范点单位<\/span><\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-qKc7mtI9\"><span style=\"font-size: 15px;\"><span style=\"color: #444444;\">★湖北省电商类专业教学指导委员会主任委员单位<\/span><\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-aZxE3TWi\"><span style=\"font-size: 15px;\"><span style=\"color: #444444;\">★湖北高教学会物流教育专业委员会常务理事单位<\/span><\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-W9yJfBiW\"><span style=\"font-size: 15px;\"><span style=\"color: #444444;\">★会计专业专本联合培养试点项目单位<\/span><\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-0GhZ7zUG\"><span style=\"font-size: 15px;\"><span style=\"color: #444444;\">★省级教学团队：会计专业教学团队<\/span><\/span><\/p><p style=\"text-align: center; line-height: 2;\" data-id=\"pb60e94d-ijbKhKaf\"><img src=\"https:\/\/oss.schoolpi.net\/uploads\/27\/editor\/97a8b25b6be566ed15ab94c71889a7c0.png\" style=\"visibility: visible; width: 465px;\" data-type=\"inline\"><span style=\"font-size: 13px;\">&nbsp;<\/span><\/p><p style=\"text-align: center; line-height: 2;\" data-id=\"pb60e94d-9ciIB8LD\"><span style=\"font-size: 13px;\">湖北省“百家讲坛”活力团支部决赛一等奖<\/span><\/p><\/div>",
                "intro_url": "",
                "is_del": 0,
                "create_time": "2022-06-10 16:54:18",
                "update_time": "2022-06-10 16:54:18",
                "cooperation_college": "",
                "image_url": "",
                "child": [],
                "specialties": [{
                    "id": 11,
                    "name": "网络营销与直播电商",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p2brfbvb4-1sx0vepbsqyo00\" style=\"text-indent: 2em; line-height: 2;\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>以“地方院校、地方特色、服务地方”为宗旨，以“工学结合、产教融合、校企合作”为主线，以质量提升工程为核心，培养从事网络营销策划、新媒体编辑、网络渠道推广、直播运营、电商主播、短视频创作与运营、客户服务等工作的技能人才。<\/span><\/p><p data-id=\"p1dr9j7ls-5dmu1s831b8000\"><br><\/p>",
                    "pivot": {
                        "id": 11,
                        "faculty_id": 3,
                        "specialty_id": 11
                    }
                }, {
                    "id": 10,
                    "name": "人力资源管理",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-lj4fmel4dkw00\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>以人力资源管理与人力资源服务从业人员职业素养与职业能力为培养主线，由学校、产业园区及合作企业组建产教联合体，培养从事组织内招管理、薪酬福利管理、绩效管理、人力资源共享服务中心及第三方人力资源服务等工作的高素质技术技能人才。<\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-1tog7xgdsyxs00\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：培养掌握本专业知识和技术技能，面向企事业单位人力资源管理部门、公共性与经营性人力资源服务行业岗位群，从事人力资源管理和服务相关工作的高素质技术技能型人才。<\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-4fed1iy3eae000\"><span style=\"font-size: 13px;\"><strong>就业方向<\/strong>：在政府机关、事业单位、企业和公共服务组织从事人力资源管理与开发、咨询与策划、教学与研究等相关工作。<\/span><\/p>",
                    "pivot": {
                        "id": 10,
                        "faculty_id": 3,
                        "specialty_id": 10
                    }
                }, {
                    "id": 6,
                    "name": "旅游管理",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-1jve5emou61s00\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业紧密对接产业链、岗位群，深化产教融合，建设智慧文旅职教高地，服务荆州文旅产业发展。牵头组建荆州旅游职业教育集团，成立由行协企校四方参与的旅游管理专业教学指导委员会，形成旅游主管部门、市旅游协会、企业、学校四方协同育人新机制。<\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-1aeeynrk35og00\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：培养具备从事本专业领域工作的基本能力，能较快适应现代旅游行业第一线需要的高技能应用型人才。<\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-48x1hz8anym000\"><span style=\"font-size: 13px;\"><strong>就业方向<\/strong>：可以在旅游行政管理部门、旅行社、旅游景区、旅游咨询公司、旅游电子商务企业、旅游规划机构、星级酒店、主题公园等单位从事旅游经济管理和企业管理工作，也可在旅游与休闲行业自主创业。 <\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-4t9wdv0n2gi000\"> <\/p>",
                    "pivot": {
                        "id": 6,
                        "faculty_id": 3,
                        "specialty_id": 6
                    }
                }, {
                    "id": 9,
                    "name": "法律文秘",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-14ae2lwqnu6800\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>面向司法机关和行政、企事业单位等行业的法律职业辅助和行政事务处理职业群，以“岗”为导向和资源，设计、融通“课证赛训”各环节，实践“岗课证赛训”五位共融的人才培养模式。<\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-21784k23jk7400\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：培养具备秘书实务能力和法律事务职业能力，在各类组织从事秘书、文书、宣传、档案管理、速录等工作的高素质高技能人才。<\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-40rjr1dcj0o000\"><span style=\"font-size: 13px;\"><strong>就业方向<\/strong>：在国家机关、事业单位、企业单位承担商务管理、外贸洽谈、经贸文秘、档案管理等工作。<\/span><\/p>",
                    "pivot": {
                        "id": 9,
                        "faculty_id": 3,
                        "specialty_id": 9
                    }
                }, {
                    "id": 12,
                    "name": "酒店管理与数字化运营",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 2em; line-height: 2;\"><span style=\"font-size: 10pt;\"><strong>培养目标<\/strong>：培养具备酒店经营管理、酒店人力资源管理专业能力，从事酒店运营管理、管理咨询等工作的中高级管理人才。<\/span><\/p>\n<p style=\"text-indent: 2em; line-height: 2;\"><span style=\"font-size: 10pt;\"><strong>就业方向<\/strong>：面向旅游局、旅行社、旅游景区景点，行业协会等企事业单位，或从事旅游接待、高层管理或职业经理人等工作。&nbsp;<\/span><\/p>",
                    "pivot": {
                        "id": 12,
                        "faculty_id": 3,
                        "specialty_id": 12
                    }
                }, {
                    "id": 13,
                    "name": "现代物流管理",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-5gy91jd68gc00\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>融入电子商务专业群建设与发展，建有智慧物流实训中心、供应链管理实训室，形成“书证融通、工学结合”的人才培养模式，为生产管理第一线输送理论扎实、实践过硬的复合型物流管理人才。<\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-5hgygk0hxyo000\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：培养适应物流行业转型升级需要，物流经营管理一线的技能型人才。<\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-47j4k7lex7m000\"><span style=\"font-size: 13px;\"><strong>就业方向<\/strong>：可在第三方物流企业、连锁零售业、生产制造企业从事仓储管理、配送管理、运输调度、物品采购、业务销售、客户服务、报关、货代等相关岗位的工作。<\/span><\/p>",
                    "pivot": {
                        "id": 13,
                        "faculty_id": 3,
                        "specialty_id": 13
                    }
                }, {
                    "id": 7,
                    "name": "电子商务",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-5sclwmkaxmk000\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>创新“校地融合、双创实践”人才培养模式，培育“跨界共生型”商科教学团队，建设地方特色数字商务课程体系，构筑数字商务产教融合实训中心，打造 “创新复合型”商务人才培养高地。<\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-yqkpl6frio000\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：培养熟练运用互联网技术、工具和平台开展电子商务设计、运营、管理和服务的技能型专门人才。<\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-4rox0rwus64000\"><span style=\"font-size: 13px;\"><strong>就业方向<\/strong>：网络时代，电子商务人才急缺客服、推广、策划、摄影、美工、视觉设计、运营，直至店长、总监，可以自己做老板。<\/span><\/p>",
                    "pivot": {
                        "id": 7,
                        "faculty_id": 3,
                        "specialty_id": 7
                    }
                }, {
                    "id": 8,
                    "name": "市场营销",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<div id=\"vsb_content\" class=\"news_content\" align=\"left\">\n<div class=\"v_news_content\">\n<div class=\"Section0\">\n<p style=\"text-indent: 2em; line-height: 2;\"><span style=\"font-size: 10pt;\"><strong>培养目标<\/strong>：培养具备营销策划与组织、市场调查预测、推销、商务谈判、客户服务、销售管理、网络营销等职业能力的应用型营销人才。<\/span><\/p>\n<p style=\"text-indent: 2em; line-height: 2;\"><span style=\"font-size: 10pt;\"><strong>就业方向<\/strong>：主要从事市场开发、产品销售、客户服务、品牌推广、渠道管理等工作。&nbsp;<\/span><\/p>\n<\/div>\n<\/div>\n<\/div>\n<div id=\"div_vote_id\" style=\"text-indent: 2em; line-height: 2;\"><\/div>",
                    "pivot": {
                        "id": 8,
                        "faculty_id": 3,
                        "specialty_id": 8
                    }
                }, {
                    "id": 14,
                    "name": "金融科技应用",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"font-weight: 400; line-height: 2; text-indent: 2em;\"><span style=\"font-size: 10pt;\"><strong>培养目标<\/strong>：培养具备互联网金融业务操作技能，能从事互联网金融一线业务操作、产品营销、支付结算、电子商务、投资理财、征信与网贷、风险管理等工作的技术技能型人才。<\/span><\/p>\n<p style=\"font-weight: 400; line-height: 2; text-indent: 2em;\"><span style=\"font-size: 10pt;\"><strong>就业方向<\/strong>：本专业就业具有高薪、高职位特点，主要从事产品推广与策划、客户开发、投资理财咨询等业务岗位、管理岗位。<\/span><\/p>",
                    "pivot": {
                        "id": 14,
                        "faculty_id": 3,
                        "specialty_id": 14
                    }
                }, {
                    "id": 15,
                    "name": "大数据与会计（与武汉轻工大学转本联合培养）",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p904ed8b-XJLWYgMK\" style=\"text-indent: 2em; line-height: 2;\"><span style=\"font-size: 13px;\"><strong> 专业特色<\/strong>：<\/span>本专业联合武汉轻工大学，对接专本联合培养技术技能型人才会计试点专业人才培养需求，根据技术技能型会计人才应具备的品质特征，实施以学科教育为基础，以技能教育为重点，以岗位能力培养为特色的专业教育模式。<\/p><p data-id=\"p2brfbvb4-4usdevmtzns000\" style=\"text-indent: 2em; line-height: 2;\"><span style=\"font-size: 13px;\"><strong>基本情况<\/strong>：荆州职业技术学院会计专业专本联合培养试点班是经湖北省教育厅批准的、建立于省级品牌专业基础上的、与武汉轻工大学联合，贯通培养高素质技术技能型人才的全省十大试点之一，至今已连续招生五年。<\/span><\/p><p data-id=\"p904ed8b-BmMGXn50\" style=\"text-indent: 2em; line-height: 2;\"><span style=\"font-size: 13px;\"><strong>培养路径<\/strong>：在荆州职业技术学院学习三年，取得普通专科学历，经过学期课程抽考和转段测试，进入武汉轻工大学学习两年，取得本科学历（颁发学士学位），并可自愿报名参加研究生考试，进行专硕或学硕的学习，完成由专科→本科→研究生的求学之路。<\/span><\/p><p data-id=\"p904ed8b-eUea9gsP\" style=\"text-indent: 2em; line-height: 2;\"><span style=\"font-size: 13px;\"><strong>报名要求<\/strong>：参加普通高等教育统一考试的湖北考生，高考分数在湖北省本科录取分数线下10分以内，2021年计划招生指标70名。<\/span><\/p>",
                    "pivot": {
                        "id": 15,
                        "faculty_id": 3,
                        "specialty_id": 15
                    }
                }, {
                    "id": 16,
                    "name": "大数据与会计",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p1dr9j7ls-4aumx67sj2y000\" style=\"text-indent: 30px;\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业坚持链接产业、牵手行业、对接企业，持续推进以“双元互动为平台、分层教学为基础、差异培养为路径，提高技术技能为核心”的智慧财经人才培养体系和模式。<\/span><\/p><p data-id=\"p1dr9j7ls-4hwme53ritm000\" style=\"text-indent: 30px;\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：本专业培养掌握会计核算、财务管理、会计信息及管理系统、智能财务会计等业务处理知识的技术技能型人才。<\/span><\/p><p data-id=\"p1dr9j7ls-j7s1zkrzxi800\" style=\"text-indent: 30px;\"><span style=\"font-size: 13px;\"><strong>就业方向<\/strong>：可以在各大企业、政府部门、事业单位等从事会计核算、财务管理、会计决策服务等财会工作，也可以在中介机构从事会计代理、审计查账、会计咨询等服务工作。<\/span><\/p>",
                    "pivot": {
                        "id": 16,
                        "faculty_id": 3,
                        "specialty_id": 16
                    }
                }]
            }, {
                "id": 1,
                "name": "医药学院",
                "pid": 0,
                "type": 1,
                "sort": 4,
                "intro_type": 1,
                "intro_text": "<div class=\"css-rm9irf am-engine\" data-element=\"root\"><p data-id=\"pd157317-41SM7Lr6\" style=\"text-indent: 30px; line-height: 2;\"><span style=\"font-size: 14px;\"><span style=\"color: #666666;\">医药学院是中国整形美容协会美容医学教育与管理分会常务理事单位、中华口腔医学技术高校联盟会员单位、湖北省食品药品职教集团常务理事单位、湖北省医学教育研究室委员单位，湖北省生理学会会员单位，荆州市药学会常务理事单位。经湖北省教育厅批准，学院现开设药学、医学美容技术、口腔医学技术三个专业。<\/span><\/span><\/p><p data-id=\"pd157317-xb2Qbp0A\" style=\"text-indent: 30px; line-height: 2;\"><span style=\"font-size: 14px;\"><span style=\"color: #666666;\">医药学院教学设施完备，实习实训条件优越。现有医学美容技术专业校内生产性实训基地一个、实验实训室12间，拥有附属医院（荆州市第三人民医院）一家，其他教学、实习基地24家，如九龙集团、五色石集团、广州安植集团等全国大型美容连锁机构；上海考门、湖北益丰等国内知名医药公司；现代牙科器材（深圳）、东莞定远陶齿制品等义齿公司。医药学院现有专兼职教师30余人，楚天技能名师1人，教授1人、主任医师2人，副教授10人、副主任医师5人，“双师型”教师比例达85%。医药学院突出职业能力培养和职业素质教育，各专业职业资格取证率达98%以上。<\/span><\/span><\/p><p data-id=\"pd157317-6wwrHZjB\" style=\"text-indent: 30px; line-height: 2;\"><span style=\"font-size: 14px;\"><span style=\"color: #666666;\">自2017年秋季学期学院重新组建以来，全体师生勠力同心、克难奋进，各项工作有序推进，各级比赛取得了优异的成绩。在全国医学美容技术专业技能竞赛上分别获团体一等奖1项，二等奖2项，三等奖1项；单项一等奖3项、二等奖8项、三等奖9项。2018年，在湖北省医学职业教育教师信息化比赛高职组信息化课堂教学比赛项目中获二等奖。在湖北省职业院校教师教学能力大赛上获课堂教学赛项三等奖2次。在全国高等医学院校青年教师教学基本功比赛上获三等奖和最受学生欢迎奖。2021年，参加湖北省首届口腔医学技能竞赛获团体三等奖，单项二等奖1项、三等奖2项，全能三等奖1项。在各专业教师积极承担科研项目，参与课题申报，主持或参与立项省部级以上课题10余项，知识产权成果11项，编写教材15部，撰写论文60余篇，参加省市级论文交流获奖28项，其中一等奖10项，二等奖15项、三等奖12项。<\/span><\/span><\/p><\/div>",
                "intro_url": "",
                "is_del": 0,
                "create_time": "2022-06-10 16:54:18",
                "update_time": "2022-06-10 16:54:18",
                "cooperation_college": "",
                "image_url": "",
                "child": [],
                "specialties": [{
                    "id": 3,
                    "name": "药学",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p4ijryyp6-3f8r6gyfrak000\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 13px;\"><strong>专业特色<\/strong>：现拥有一支高素质“双师型”教师队伍，积极探索校企合作办学新模式，成立了益丰店长订单班、能特订单班，与多家医疗机构、药企等单位深度合作，普通专升本录取率较高。<\/span><\/p><p data-id=\"p9c7f040-gmE4605d\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：本专业培养理想信念坚定，适应社会发展需要的德智体美劳全面发展，具有一定科学文化水平，良好的人文素养，职业道德和创新意识，精益求精的工匠精神，较强的就业能力和可持续发展的能力，掌握本专业知识和技能，面向卫生行业的药师、制药工程技术人员、医药商品购销员等职业群，能够从事药剂师、药品生产、质量检验和医药商品购销等工作的高素质、复合型技术技能人才。<\/span><\/p><p data-id=\"p9c7f040-PiHPb15R\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 13px;\"><strong>主干课程<\/strong>：正常人体结构、生理学、生物化学、无机化学、有机化学、分析化学、临床医学概论、药理学、药剂学、药物分析、药物化学、药事管理与法规、临床药物治疗学、免疫与病原生物、中药学、医药市场营销、医药企业经营与管理、医药商务礼仪、药品GMP实务、药学服务实务、药品储存与养护技术等。<\/span><\/p><p data-id=\"p1dr9j7ls-1xjuwwpy6bxc00\"><br><\/p>",
                    "pivot": {
                        "id": 3,
                        "faculty_id": 1,
                        "specialty_id": 3
                    }
                }, {
                    "id": 1,
                    "name": "医学美容技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p4ijryyp6-qbfqg1cxc0g00\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 13px;\"><strong>专业特色<\/strong>：现拥有一支高素质“双师型”教师队伍，建有校内美容生产性实训中心，积极开展校企深度合作，建有圣御颜订单班、华美订单班、“宋氏摇腹”非遗项目传承班等，推动“岗课赛证”综合育人。<\/span><\/p><p data-id=\"p9c7f040-OlATm6Na\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：本专业培养理想信念坚定，适应社会发展需要的德智体美劳全面发展，具有一定科学文化水平，良好的人文素养，职业道德和创新意识，精益求精的工匠精神，较强的就业能力和可持续发展的能力，掌握本专业知识和技能，面向健康服务产业、美容行业（生产、建设、管理和服务一线）的技术、营销、管理等相关岗位，能够从事美容护理、美容保健、医美咨询与设计、美容产品销售、美容院经营管理等工作的高素质、复合型技术技能人才。<\/span><\/p><p data-id=\"p9c7f040-ZYHXma0H\" style=\"line-height: 2; text-indent: 2em;\"><span style=\"font-size: 13px;\"><strong>主干课程<\/strong>：美容应用解剖、美容化妆品、美容礼仪、免疫与病原生物、美容药物、美容营养、美容心理学、美容美体技术、美容中医技术、纹饰技术、美容外科学概论、美容皮肤治疗技术、美容咨询与设计、形象设计、美容企业经营与管理、美容营销、素描与色彩、临床医学概论等。<\/span><\/p>",
                    "pivot": {
                        "id": 1,
                        "faculty_id": 1,
                        "specialty_id": 1
                    }
                }, {
                    "id": 2,
                    "name": "口腔医学技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p2brfbvb4-4ii4g1nb9xq000\" style=\"text-indent: 2em; line-height: 2;\"><span style=\"font-size: 13px;\"><strong>专业特色;<\/strong>拥有一支师资结构优良，专业技能精湛，教学能力较强的专业教学团队。校内建有口腔数字化实训中心，校外与现代牙科等龙头企业建立长期合作关系。<\/span><\/p><p data-id=\"p904ed8b-atkLRv6s\" style=\"text-indent: 2em; line-height: 2;\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：本专业培养理想信念坚定，适应社会发展需要的德智体美劳全面发展，具有一定科学文化水平，良好的人文素养，职业道德和创新意识，精益求精的工匠精神，较强的就业能力和可持续发展的能力，掌握本专业知识和技能，面向口腔相关行业的口腔医学技术（士、师）、口腔修复体制作工等职业群，能够从事口腔疾病的辅助治疗、义齿修复工艺技术、修复体质量检查、义齿生产档案管理，口腔材料、设备等企业营销及有关技术支持岗位工作的高素质、复合型技术技能人才。<\/span><\/p><p data-id=\"p904ed8b-eS0PpfHm\" style=\"text-indent: 2em; line-height: 2;\"><span style=\"font-size: 13px;\"><strong>主干课程：<\/strong>正常人体结构、口腔解剖生理学、口腔医学美学、口腔组织病理学、口腔预防医学、牙体雕刻技术、口腔材料学、可摘局部义齿修复工艺技术、全口义齿工艺技术、口腔固定修复工艺技术、口腔正畸学、口腔疾病概要、口腔设备学、口腔工艺管理等。<\/span><\/p>",
                    "pivot": {
                        "id": 2,
                        "faculty_id": 1,
                        "specialty_id": 2
                    }
                }]
            }, {
                "id": 2,
                "name": "护理学院",
                "pid": 0,
                "type": 1,
                "sort": 5,
                "intro_type": 1,
                "intro_text": "<div class=\"css-rm9irf am-engine\" data-element=\"root\"><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"p1b5e9e2-RxZE6L7M\"><span style=\"font-size: 14px;\">学院特色<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"p1b5e9e2-mGdFaJT7\"><span style=\"font-size: 14px;\">护理专业是国家教育部批准的国家骨干专业<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"p1b5e9e2-4R9XnVNl\"><span style=\"font-size: 14px;\">护理专业是省教育厅批准的高等职业教育特色专业<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"p1b5e9e2-4e8SG0eT\"><span style=\"font-size: 14px;\">2018年及2019年湖北省职院校技能大赛（高职组）护理技能赛项获一等奖。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"p1b5e9e2-XRWODNlX\"><span style=\"font-size: 14px;\">教学设施完备，实习实训条件优越。（现有校内实验实训室55间，拥有附属医院一家，分布全国的二级甲等以上国内知名的大型综合实习医院88家）。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"p1b5e9e2-OMIHfMEb\"><span style=\"font-size: 14px;\">始终坚持以学生发展为中心，将管理与服务相结合，“在校学习—课余生活—医院实习”三线贯通，致力于提升学生综合竞争力。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"p1b5e9e2-j7aor0aP\"><span style=\"font-size: 14px;\">组建专升本班特色班，明确升学目标，营造学习氛围，近三年升学率保持在80%以上。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"p1b5e9e2-REZZC8UV\"><span style=\"font-size: 14px;\">创新人才培养模式，形成就业优先的工作机制，在全省率先“实习—就业”一体化模式。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"p1b5e9e2-xrsRXz6h\"><span style=\"font-size: 14px;\">与乐清开发区同乐医院合作开办现代学徒制班，入学即可签订就业协议，医院提供全额学费和住宿费。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"p1b5e9e2-vGj2kMQt\"><span style=\"font-size: 14px;\">与韩国、瑞典高校及企业合作，提供留学机会，提升学历、开阔眼界、获得更多就业机会。<\/span><\/p><\/div>",
                "intro_url": "",
                "is_del": 0,
                "create_time": "2022-06-10 16:54:18",
                "update_time": "2022-06-10 16:54:18",
                "cooperation_college": "",
                "image_url": "",
                "child": [],
                "specialties": [{
                    "id": 4,
                    "name": "助产",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-32a1fypdqz8000\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业主要培养在各级各类医疗机构从事临床助产、母婴保健、妇产科护理、计划生育技术服务和社区护理的专门人才，学院设有妇女儿童保健基地、妇儿实训中心、婴幼儿游泳馆，能够满足教学、社会培训、医学人才继续教育等需求。<\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-3ouo6k4lg20000\"><span style=\"font-size: 13px;\"><strong>培养目标：<\/strong>具有现代医学理念、良好的职业道德素质、一定的求实创新意识，具有人文社会科学、医学、妇幼卫生保健的基本知识和较强的助产操作技能和工作能力，在各级医疗卫生保健和服务机构从事临床助产、母婴保健、妇产科护理、计划生育技术服务和社区护理的高素质技能型专门人才。<\/span><\/p><p style=\"line-height: 2; text-indent: 2em;\" data-id=\"p4ijryyp6-69lh7z7qctg00\"><span style=\"font-size: 13px;\"><strong>就业前景<\/strong>：适应在各级综合医院、妇幼保健院、中医院的妇产科、新生儿科，母婴保健科、计划生育指导站、社区卫生服务中心从事临床助产、母婴保健、妇产科护理、计划生育技术服务和社区护理等相关工作。<\/span><\/p>",
                    "pivot": {
                        "id": 4,
                        "faculty_id": 2,
                        "specialty_id": 4
                    }
                }, {
                    "id": 5,
                    "name": "护理",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-4nate7cqm4c000\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业是国家骨干专业、省级特色专业，主要培养能在各级各类医疗机构一线从事临床护理及预防保健工作的专门人才，2018年以来学院师生获湖北省职业院校技能大赛（高职组）护理技能赛项一等奖3个，二等奖7个，三等奖6个。<\/span><\/p><p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-2q1lyunqfxa000\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：培养具有现代护理理念，熟练掌握护理专业基础理论、基本知识、基本技能，具备良好的综合素质和较强的职业实践能力，能在各级各类医疗机构一线从事临床护理及预防保健工作的高素质技能型专门人才。<\/span><\/p><p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-3u30i1czpv0000\"><span style=\"font-size: 13px;\"><strong>就业前景<\/strong>：适应各级医疗卫生机构、社区医疗服务中心从事护理、预防保健、康复等工作。<\/span><\/p>",
                    "pivot": {
                        "id": 5,
                        "faculty_id": 2,
                        "specialty_id": 5
                    }
                }]
            }, {
                "id": 6,
                "name": "信息与通信工程学院",
                "pid": 0,
                "type": 1,
                "sort": 6,
                "intro_type": 1,
                "intro_text": "<div class=\"css-rm9irf am-engine\" data-element=\"root\"><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-k2qfX1P4\"><span style=\"font-size: 14px;\">★国家计算机应用及软件技术实训基地<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-WcGAVS7I\"><span style=\"font-size: 14px;\">★教育部-思科湖北省首批网络安全人才培养基地<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-8wEVvwcp\"><span style=\"font-size: 14px;\">★湖北省公安厅网络安全人员培训基地（荆州）<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-rQv5vxvF\"><span style=\"font-size: 14px;\">★商务部指定软件外包人才培养基地<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-7UKBAgss\"><span style=\"font-size: 14px;\">★全国信息安全职业教育集团理事单位<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-wrnXrCyI\"><span style=\"font-size: 14px;\">★全国职业院校技能大赛裁判长单位<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-mcE0nV3V\"><span style=\"font-size: 14px;\">★国务院首批1+X证书制度试点单位<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-tMXyArer\"><span style=\"font-size: 14px;\">★教育部全国物联网技术应用培训项目承担单位<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-mJPZasVq\"><span style=\"font-size: 14px;\">★湖北省普通高等学校战略性新兴(支柱)产业人才培养计划项目单位<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-103Oqb9f\"><span style=\"font-size: 14px;\">★湖北信息技术职业教育集团理事长单位<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-2ENUcUr0\"><span style=\"font-size: 14px;\">★荆州信息技术职业教育集团副理事长单位<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-2RUMRVCx\"><span style=\"font-size: 14px;\">★省级计算机应用技术教学团队<\/span><\/p><p style=\"text-align: center; line-height: 2;\" data-id=\"pb60e94d-1aTg4RcK\"><span style=\"font-size: 14px;\"><span style=\"font-size: 13px;\"><img src=\"https:\/\/oss.schoolpi.net\/uploads\/27\/editor\/c6e2796180a4e955766f1ea7158882c0.jpeg\" style=\"visibility: visible; width: 636px;\" data-type=\"inline\"><\/span><\/span><\/p><p style=\"text-align: center; line-height: 2;\" data-id=\"pb60e94d-OqgapWPQ\"><span style=\"font-size: 13px;\"><br><\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-ZbU9jEpG\"><span style=\"font-size: 14px;\"><strong>校企合作“华为信息与网络技术学院”项目<\/strong><\/span><\/p><p style=\"text-align: justify; text-indent: 21pt; line-height: 2;\" data-id=\"p7ee68eb-L3W65dZe\"><span style=\"font-size: 14px;\">学校与华为技术有限公司共建“华为信息与网络技术学院”，依托华为成熟和先进的技术研发实力，引入实用、热门ICT领域技术，对接华为职业认证和人才培养课程，学生在校就能体验华为ICT解决方案真实环境，学生成绩合格颁发《华为网络工程师认证证书》，毕业后可直接进入华为公司授权代理商、集成商从事网络系统设计与实施、网络服务器维护、网络故障处理等工作，学校正成为华为卓越工程师的摇篮。<\/span><\/p><p style=\"text-align: center; line-height: 2;\" data-id=\"pb60e94d-jTrKClsS\"><span style=\"font-size: 13px;\"><br><\/span><\/p><p style=\"text-align: center; line-height: 2;\" data-id=\"pb60e94d-lhXqMdcP\"><img src=\"https:\/\/oss.schoolpi.net\/uploads\/27\/editor\/76c4aa178624bce48c297c917ebc0215.jpeg\" style=\"visibility: visible; width: 643px;\" data-type=\"inline\"><\/p><\/div>",
                "intro_url": "",
                "is_del": 0,
                "create_time": "2022-06-10 16:54:18",
                "update_time": "2022-06-10 16:54:18",
                "cooperation_college": "",
                "image_url": "",
                "child": [],
                "specialties": [{
                    "id": 35,
                    "name": "人工智能技术应用",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-33anukg3e9g000\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>紧密围绕数字中国、新兴数字产业、数字人产业技术技能人才需求，以企业用人为导向全流程培养人工智能专业型人才。<\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-2bze1155krgg00\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：培养能从事人工智能相关的应用开发、系统集成与运维、机器学习、数据保护等岗位工作的技术技能型人才。<\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-jif49klrqhs00\"><span style=\"font-size: 13px;\"><strong>就业方向<\/strong>：从事人工智能应用产品开发与测试、数据处理、系统运维、产品营销、技术支持等工作。<\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-2dt1685whji800\"> <\/p>",
                    "pivot": {
                        "id": 35,
                        "faculty_id": 6,
                        "specialty_id": 35
                    }
                }, {
                    "id": 34,
                    "name": "信息安全技术应用",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-2wl29789o68000\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>熟悉信息系统、信息安全与保密、网络安全等方面的基本知识和技术，采取各种防护措施，对信息、网络、服务器等进行安全保护等，能完成信息系统集成、信息系统管理及运维、网络及安全产品营销等岗位任务。<\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-leq19ybyrd800\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：培养有备信息系统安全设计和组建、配置应用系统平台、配置网络安全设备能力的技术技能型人才。<\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-20k7nwprekqo00\"><span style=\"font-size: 13px;\"><strong>就业方向<\/strong>：从事网络系统的渗透测试、网络安全设备管理、网络安全产品营销等工作。<\/span><\/p>",
                    "pivot": {
                        "id": 34,
                        "faculty_id": 6,
                        "specialty_id": 34
                    }
                }, {
                    "id": 32,
                    "name": "大数据技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-ez2kl7i5e9c00\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>培养具备大数据采集、存储、清洗、分析、开发及系统维护的专业能力和技能的技术技能型人才<strong>。<\/strong><\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-3sqm9xzjbkc000\"><span style=\"font-size: 13px;\"><strong>培养目标：<\/strong>培养具备大数据采集、存储、清洗、分析、开发及系统维护的专业能力和技能的技术技能型人才。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-2iymzbscyic000\"><span style=\"font-size: 13px;\"><strong>就业方向：<\/strong>在各个领域从事网络爬虫、大数据开发、可视化工具开发、信息架构开发、数据仓库研究、数据科学研究、企业数据管理、数据安全研究等工作。<\/span><\/p>",
                    "pivot": {
                        "id": 32,
                        "faculty_id": 6,
                        "specialty_id": 32
                    }
                }, {
                    "id": 31,
                    "name": "软件技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 20px;\" data-id=\"p99zltr6o-3lznhemqe92000\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>培养具备软件设计与开发、网站设计与制作、数据库管理与维护等专业知识，面向IT和信息技术服务业的计算机程序设计员、计算机软件测试员等职业，能够从事软件开发、软件测试、软件技术支持等工作的技能人才。<\/span><\/p><p style=\"text-indent: 20px;\" data-id=\"p99zltr6o-3n2bn6v5uwa000\"><span style=\"font-size: 13px;\"><strong>培养目标：<\/strong>培养具有网站设计与开发、互联网软件实施与管理、数据库管理与维护等工作的技术技能型人才。<\/span><\/p><p style=\"text-indent: 20px;\" data-id=\"p99zltr6o-5cw8xomrzh4000\"><span style=\"font-size: 13px;\"><strong>就业方向<\/strong>：从事软件开发工程师、数据库开发Android移动应用开发等工作。<\/span><\/p>",
                    "pivot": {
                        "id": 31,
                        "faculty_id": 6,
                        "specialty_id": 31
                    }
                }, {
                    "id": 30,
                    "name": "计算机网络技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-1z6whtdowgrk00\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>培养具备网络设备安装、调试、维护和维修能力, 能为通信运营商及专业网络公司或个人提供硬件设备、软件、服务和解决方案，能完成信息系统集成、信息系统管理及运维、网络及安全产品营销等岗位任务。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-1tp4zbntnvts00\"><span style=\"font-size: 13px;\"><strong>培养目标：<\/strong>培养具备网络设备安装、调试、维护和维修、网站开发、设计与建设、操作系统搭建、维护能力的技术技能型人才。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-3lqzly71xds000\"><span style=\"font-size: 13px;\"><strong>就业方向：<\/strong>可在网络开发、售前技术支持、网络应用开发、系统运维、系统集成、网络安全等领域工作。<\/span><\/p>",
                    "pivot": {
                        "id": 30,
                        "faculty_id": 6,
                        "specialty_id": 30
                    }
                }, {
                    "id": 28,
                    "name": "计算机应用技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-1nwyt8d9p6v400\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业以培养创新型、应用型、技术技能型人才为目标，推行双证教育，将学历教育与职业技能培训相结合，注重培养学生较强的职业适应能力和可持续发展的能力,以适应计算机行业高速发展的特点。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-440bteexboy000\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：培养具备计算机系统安装、调试、维护和维修能力，网站设计与建设能力以及小型信息管理系统开发能力的技术技能型人才。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-p70r8l014io00\"><span style=\"font-size: 13px;\"><strong>就业方向<\/strong>：从事计算机使用过程的技术服务及外围设备的销售和售后服务、系统维护和修理工作。<\/span><\/p>",
                    "pivot": {
                        "id": 28,
                        "faculty_id": 6,
                        "specialty_id": 28
                    }
                }, {
                    "id": 29,
                    "name": "物联网应用技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-fpnymtcsn6800\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>本专业培养具备物联网系统工程设计、开发和应用、工程设备安装调试、物联网应用系统的运行与维护及相关企业的产品营销、技术服务与设备运行维护、管理等岗位工作的高素质技术技能型人才。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-2tx98wrb2w8000\"><span style=\"font-size: 13px;\"><strong>培养目标：<\/strong>培养具有物联网系统工程设计、开发和应用、工程设备安装调试、物联网应用系统的运行和维护及相关企业的技术技能型人才。<\/span><\/p><p style=\"text-indent: 20px; line-height: 2;\" data-id=\"paat5dn6o-278isyoe96v400\"><span style=\"font-size: 13px;\"><strong>就业方向：<\/strong>从事物联网设备生产与测试、应用系统硬件开发、组网等岗位。<\/span><\/p>",
                    "pivot": {
                        "id": 29,
                        "faculty_id": 6,
                        "specialty_id": 29
                    }
                }, {
                    "id": 33,
                    "name": "校企合作“华为信息与网络技术学院”项目",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 20px;\" data-id=\"p99zltr6o-1m40dralq4rk00\"><strong>校企合作“华为信息与网络技术学院”项目<\/strong>：<\/p><p style=\"text-indent: 20px;\" data-id=\"p99zltr6o-1w3g726fjcqo00\">学校与华为技术有限公司共建“华为信息与网络技术学院”，依托华为成熟和先进的技术研发实力，引入实用、热门ICT领域技术，对接华为职业认证和人才培养课程，学生在校就能体验华为ICT解决方案真实环境，学生成绩合格颁发《华为网络工程师认证证书》，毕业后可直接进入华为公司授权代理商、集成商从事网络系统设计与实施、网络服务器维护、网络故障处理等工作，学校正成为华为卓越工程师的摇篮。<\/p>",
                    "pivot": {
                        "id": 33,
                        "faculty_id": 6,
                        "specialty_id": 33
                    }
                }]
            }, {
                "id": 7,
                "name": "纺织服装与艺术设计学院",
                "pid": 0,
                "type": 1,
                "sort": 7,
                "intro_type": 1,
                "intro_text": "<div class=\"css-rm9irf am-engine\" data-element=\"root\"><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-UdbQxchP\"><span style=\"font-size: 13px;\">★国家级骨干专业：服装与服饰设计、环境艺术设计<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-BetRKWd3\"><span style=\"font-size: 13px;\">★教育部现代学徒制试点改革专业:环境艺术设计、室内艺术设计<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-Z8AxWfM9\"><span style=\"font-size: 13px;\">★湖北高校省级特色专业：服装与服饰设计、环境艺术设计<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-ac7tBgn9\"><span style=\"font-size: 13px;\">★全国纺织服装教育学会委员单位<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-RaEMBpBV\"><span style=\"font-size: 13px;\">★全国纺织服装教学指导委员会委员单位<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-Eirr9ZSF\"><span style=\"font-size: 13px;\">★全国染整技术专业指导委员会委员单位<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-DCNj5zNk\"><span style=\"font-size: 13px;\">★教育部1+X证书制度动漫设计与制作专业考评单位<\/span><\/p><p style=\"text-align: justify; line-height: 2;\" data-id=\"p8763f2b-vcFW4FZU\"><span style=\"font-size: 13px;\">★荆州装饰职业教育集团主任委员单位<\/span><\/p><p style=\"text-align: center; line-height: 2;\" data-id=\"pb60e94d-VQHUHg3Z\"><span style=\"font-size: 13px;\">&nbsp;<img src=\"https:\/\/oss.schoolpi.net\/uploads\/27\/editor\/517b066ff3d79c3e233c6cbb2cb7d045.png\" style=\"visibility: visible; width: 659px;\" data-type=\"inline\"><\/span><\/p><p style=\"text-align: center; line-height: 2;\" data-id=\"pb60e94d-83gpe74N\"><strong>三维全息教室<\/strong><span style=\"font-size: 13px;\">​<\/span><\/p><p data-id=\"pd157317-su80EnmS\" style=\"line-height: 2;\"><br><\/p><\/div>",
                "intro_url": "",
                "is_del": 0,
                "create_time": "2022-06-10 16:54:18",
                "update_time": "2022-06-10 16:54:18",
                "cooperation_college": "",
                "image_url": "",
                "child": [],
                "specialties": [{
                    "id": 37,
                    "name": "环境艺术设计",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-36kkx05fgo2000\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>通过企业与学校、教学与项目交叉融合式教学培养模式，培养学生公共空间、商业空间、家居空间设计与产品营销能力，使学生成为适应人居环境设计需求、符合环境艺术设计等行业的高素质技术技能人才。<\/span><\/p><p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-1x5d3nfozav400\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：培养掌握室内设计、景观设计等基础知识，具备较强的环境艺术设计表现能力、基本的施工与管理等专业技能和职业素养，高素质复合型技术技能人才。<\/span><\/p><p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-3gj15om245o000\"><span style=\"font-size: 13px;\"><strong>就业方向<\/strong>：面向装饰装修、整体全屋定制、园林景观、会展设计、房地产开发企业的绘图员、室内设计师、景观设计师、产品设计师、工程监理、工装设计师等工作岗位。<\/span><\/p>",
                    "pivot": {
                        "id": 37,
                        "faculty_id": 7,
                        "specialty_id": 37
                    }
                }, {
                    "id": 36,
                    "name": "室内艺术设计",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-5i7xt5sgw64000\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>通过企业与学校、教学与项目交叉融合式教学培养模式，培养学生商业空间、家居空间、智能家居设计及产品营销能力，使学生成为适应装饰设计产业需求、符合室内艺术设计等行业的高素质技术技能人才。<\/span><\/p><p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-ldqm9kv6w8g00\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：培养掌握室内设计的基本知识和专业技能，具有“懂材料、懂工艺、会设计、能管理、能创新、有文化艺术修养”的高素质技能型专门人才。<\/span><\/p><p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-3t79iwxyb7w000\"><span style=\"font-size: 13px;\"><strong>就业方向<\/strong>：面向装饰装修设计、整体软装设计、整体全屋定制、智能家居、建材家居等领域的设计绘图员、室内设计师、软装陈设师、产品设计师、工程监理、预算员等工作岗位。<\/span><\/p>",
                    "pivot": {
                        "id": 36,
                        "faculty_id": 7,
                        "specialty_id": 36
                    }
                }, {
                    "id": 38,
                    "name": "服装与服饰设计",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-27tf27h1ehwk00\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>通过对接纺织服装产业需求，培养具备较高文化与职业素养，掌握服装设计、生产、营销领域等必备的专业基础理论知识，能胜任服装设计、制版、高级定制、服装营销与管理等相关工作，并具有终身发展能力的高素质技术技能型人才。<\/span><\/p><p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-48cglnla4v8000\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：培养能胜任服装设计、服装制版、高级服装定制、服装营销与管理等相关工作的高素质技术技能型人才。<\/span><\/p><p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-1gq75d33dlxc00\"><span style=\"font-size: 13px;\"><strong>就业前景<\/strong>：面向品牌服装企业及设计公司，从事服装设计、服装买手、样衣师、服装制版、电脑辅助设计、服装跟单、CAD排料、CDT款式设计工程师等岗位。<\/span><\/p>",
                    "pivot": {
                        "id": 38,
                        "faculty_id": 7,
                        "specialty_id": 38
                    }
                }, {
                    "id": 40,
                    "name": "广告艺术设计",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-4efhz1x34sk000\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>通过实施校企双主体育人模式，培养学生洞察消费者行为的广告策略能力，平面广告、影视广告、新媒体广告等设计制作能力，使学生成为具有创新思维、精湛技艺的高素质技术技能型人才。<\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-16lfwuzq55uk00\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：培养掌握网店设计技术专业的基础理论知识、专业知识与最新技术，有较强的策划、创意与设计能力，能够从事网店设计、创意、策划和生产工艺工作的高素质技术技能型人才。<\/span><\/p><p style=\"text-indent: 2em; line-height: 2;\" data-id=\"p2brfbvb4-3au4jkpccxk000\"><span style=\"font-size: 13px;\"><strong>就业前景<\/strong>：面向电子商务公司、网页设计公司、网站建设公司、广告公司、图文设计公司、出版行业、企业宣传策划部门及其他需求设计师的领域，从事网店设计、网店经营管理为一体等岗位。<\/span><\/p>",
                    "pivot": {
                        "id": 40,
                        "faculty_id": 7,
                        "specialty_id": 40
                    }
                }, {
                    "id": 39,
                    "name": "动漫制作技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-50t51duehig000\"><span style=\"font-size: 13px;\"><strong>专业特色：<\/strong>通过现代艺术理念和新媒体艺术能力实践，培养学生的艺术美感、创作思维和鉴赏能力；能使用原画、二维、三维动画软件进行艺术创作，能够独立完成动画设计、动画编辑、动画创作、后期制作等创意设计，培养动漫设计、游戏制作领域的高素质技术技能型人才。<\/span><\/p><p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-42z0zex42ys000\"><span style=\"font-size: 13px;\"><strong>培养目标<\/strong>：培养掌握动漫制作专业领域必备的美学、创意、造型设计等动画基础知识和专业技能，具备动漫角色与场景设计、动画运动规律与原画绘制、三维模型制作与渲染、影视后期剪辑等专业领域实际工作的职业技能，具有良好职业道德和敬业精神的高素质技术技能人才。<\/span><\/p><p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-586ak9lwxcc000\"><span style=\"font-size: 13px;\"><strong>就业前景<\/strong>：面向行业影视动画制作及电视传媒，广告传播，游戏、网络动漫，手机游戏、手机动漫，各企事业单位的宣传与培训等行业企业。从事动漫前期策划、导演、编剧的资深设计师，动画角色设计、场景设计的高级设计师，二维动态中间图绘制动画绘制员，三维建模、动画、渲染，出版、印刷、广告等行业的平面设计师，影视后期制作的等职业岗位。 <\/span><\/p>",
                    "pivot": {
                        "id": 39,
                        "faculty_id": 7,
                        "specialty_id": 39
                    }
                }]
            }, {
                "id": 8,
                "name": "生物化工学院",
                "pid": 0,
                "type": 1,
                "sort": 8,
                "intro_type": 1,
                "intro_text": "<p data-id=\"p1dr9j7ls-13icq8nad40000\" style=\"text-align: justify; text-indent: 30px;\">      生物化工学院以原湖北省荆州农业学校为基础，2001年8月正式建院。学院现设畜牧兽医、动物医学、园林技术、应用化工技术、现代农业技术、烹饪工艺与营养、酿酒技术7个专业,在校生近千人<span style=\"font-size: 17px;\"><span style=\"color: #000000;\">。<\/span><\/span><\/p><p data-id=\"pjvuq6sf4-5so2u89ts3s000\" style=\"text-align: justify; text-indent: 2em;\">学院积极推进“产教融合、校企合作”，建有实习和就业基地79个。学院坚持服务国家乡村振兴战略，是江汉平原现代农业职业教育集团理事长单位、国家“一村多名大学生计划”指定培养基地、国家新型职业农民培育工程指定培训基地、拥有一支荆州市科技特派员专家团队。<\/p><p data-id=\"p1dr9j7ls-4ugqwb6lyb6000\"><br><\/p>",
                "intro_url": "https:\/\/mp.weixin.qq.com\/s\/AZsgUqUBdl3IhtjHwUECXQ",
                "is_del": 0,
                "create_time": "2022-06-10 16:54:18",
                "update_time": "2024-06-06 19:44:44",
                "cooperation_college": "",
                "image_url": "",
                "child": [],
                "specialties": [{
                    "id": 44,
                    "name": "现代农业技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p1dr9j7ls-uceonwx7rts00\"><strong>专业特色：<\/strong>江汉平原现代农业职业教育集团理事长单位；国家“一村多名大学生计划”指定培养高校；国家新型职业农民培育工程指定培训基地；荆州市科技特派员专家团队。湖北省农村实用人才大赛二等奖，获湖北省创业扶持资金。<\/p><p data-id=\"p1dr9j7ls-4rvgitknta4000\"><strong>培养目标<\/strong><\/p><p data-id=\"p1dr9j7ls-4uc1occ5r0k000\">     培养适应社会主义新农村建设和乡村振兴战略需要，具有优良的综合素质和现代农业创新思想与理念，具备现代种植技术、管理能力、创新创业能力；能胜任种植业生产、经营管理、现代农业技术推广和信息服务等工作的高素质技术技能型人才。<\/p><p data-id=\"p1dr9j7ls-2y4ivtpqsx6000\"><strong>主修课程<\/strong><\/p><p data-id=\"p1dr9j7ls-38tc8ef44y6000\">     农作物生产技术、园艺作物生产技术、作物病虫草害绿色防治技术、设施农业、农产品储藏与加工、农资营销与推广、土壤肥料、植物与植物生理、现代农业概论、农业生态、植物生产环境、植物遗传基础、田间试验与统计分析。<\/p><p data-id=\"p1dr9j7ls-20obdun3u5k000\"><strong>资格证书<\/strong><\/p><p data-id=\"p1dr9j7ls-bwzjkb20soo00\">     园艺师、农业工程师、农产品质量安全检验员。<\/p><p data-id=\"p1dr9j7ls-2qu9b2fk336000\"><br><\/p><p data-id=\"p1dr9j7ls-5pfbd8fh80s000\"><strong>实训条件<\/strong><\/p><p data-id=\"p1dr9j7ls-5pfbdmlwyw0000\">    校内建有农产品检测室、显微镜实训室、土壤检测实训室等来培养学生观察植物细胞、参与植物繁育、进行农产品检测等的实践能力。校外能提供农业生产技术员等相关实习岗位，有效保证实习学生日常工作、学习、生活的安全、可靠。<\/p><p data-id=\"p1dr9j7ls-2zn003b1ms4000\"><br><\/p><p data-id=\"p1dr9j7ls-12k0vh5ykp5c00\"><strong>就业方向<\/strong><\/p><p data-id=\"p1dr9j7ls-582f3s8e9r4000\">     主要从事现代农业技术推广服务、农产品质量检测与管理、生态农业技术研发、技术指导服务、现代农业企业经营与管理、现代农业自主创业等。<\/p>",
                    "pivot": {
                        "id": 44,
                        "faculty_id": 8,
                        "specialty_id": 44
                    }
                }, {
                    "id": 45,
                    "name": "烹饪工艺与营养",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p1dr9j7ls-3kgkqdz35lo000\"><strong>专业特色：<\/strong>全国高职院校信息化实训教学赛一等奖、湖北省工匠杯特金奖，全国职业院校学生技能大赛三等奖。<\/p><p data-id=\"p1dr9j7ls-27syenrp92f400\"><strong>培养目标<\/strong><\/p><p data-id=\"p1dr9j7ls-3d7tib1vu8e000\">     培养掌握本专业知识和技能，面向住宿业、餐饮业等行业的餐饮服务人员职业群，能够从事中式菜点烹饪、营养配餐、宴会设计、厨房管理等工作的高素质技术技能人才等工作的高素质技术技能人才。<\/p><p data-id=\"p1dr9j7ls-2mrukfkynjs000\"><strong>主修课程<\/strong><\/p><p data-id=\"p1dr9j7ls-53v8187iqt4000\">     烹饪文化概论、食品雕刻、冷拼、调酒技术、餐饮食品安全与控制、餐饮营养与配餐、中式烹调工艺、中式面点工艺、宴会设计实务、烘焙技术、膳食食疗学等。<\/p><p data-id=\"p1dr9j7ls-3fgnoljck08000\"><strong>资格证书<\/strong><\/p><p data-id=\"p1dr9j7ls-5s8a66njowg000\">      中式烹调师、中式面点师、健康管理师。<\/p><p data-id=\"p1dr9j7ls-2jb0t23x46s000\"><strong>实训条件<\/strong><\/p><p data-id=\"p1dr9j7ls-omqg61dmfcw00\">     烹饪工艺与营养专业具有稳定的校内实训室和校外实习基地。能提供中式烹调、中式面点、冷菜制作等相关实习岗位，能涵盖当前餐饮产业发展的主流技术，可接纳一定规模的学生实习；能够配备相应数量的指导教师对学生实习进行指导和管理。<\/p><p data-id=\"p1dr9j7ls-1dnknypccubk00\"><strong>就业方向<\/strong><\/p><p data-id=\"p1dr9j7ls-35u6cfj6w0600\">     面向中式烹调师、中式面点师、营养配餐员等职业，烹饪原材料加工、中式烹饪、宴会设计、厨房运行等岗位。<\/p>",
                    "pivot": {
                        "id": 45,
                        "faculty_id": 8,
                        "specialty_id": 45
                    }
                }, {
                    "id": 43,
                    "name": "应用化工技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p1dr9j7ls-3ms2mx3s65c000\"><strong>专业特色：<\/strong>现代学徒制人才培养模式，订单培养，企业承担学费，发放奖助学金，就业率100%，入学签订就业协议。湖北省工匠杯农产品检验二等奖。<\/p><p data-id=\"p1dr9j7ls-13i281frylls00\"><strong>培养目标<\/strong><\/p><p data-id=\"p1dr9j7ls-4tlu57qvr72000\">     旨在培养具有良好职业道德、必备理论知识、较高基本技能和综合素质、较强实践能力及创新意识、良好的敬业精神，从事化工生产一线，服务于化工生产操作、化工产品检验、化工环境监测和化工设备维护等岗位群的高素质技能型专门人才。<\/p><p data-id=\"p1dr9j7ls-399g5bv1fza000\"><strong>主修课程<\/strong><\/p><p data-id=\"p1dr9j7ls-44q8o0xonr0000\">    无机及分析化学、有机化学、化工安全与环保、仪器分析、化工制图、基础化学实验、化工工艺学、化工原理、精细化工生产技术、分离工程、化工机械与设备、工业分析等。<\/p><p data-id=\"p1dr9j7ls-1dwe59s6tbb400\"><strong>资格证书<\/strong><\/p><p data-id=\"p1dr9j7ls-1ov0bpbmyr9c00\">    有机合成工、化工总控工、化工工艺试验工、化学分析检验工、化工设备维修工、化工仪表工中级或高级职业资格证书。<\/p><p data-id=\"p1dr9j7ls-4dh2zg7fpgo000\"><strong>实训条件<\/strong><\/p><p data-id=\"p1dr9j7ls-tw2kxmlh1v400\">    校内建有化学基础实验室、化学分析实验室、仪器分析实训室等。校外与宜昌兴发集团、湖北江瀚新材料股份有限公司、湖北新生源生物工程有限公司建立了校外实习基地。<\/p><p data-id=\"p1dr9j7ls-6bt2fbnyh7k00\"><strong>就业方向<\/strong><\/p><p data-id=\"p1dr9j7ls-18a81xnulsjg00\">     化工工程师、生产管理师、质量工程师、食品工程师、化妆品研发工程师、医药研发工程师、环境工程师。<\/p>",
                    "pivot": {
                        "id": 43,
                        "faculty_id": 8,
                        "specialty_id": 43
                    }
                }, {
                    "id": 42,
                    "name": "畜牧兽医",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p1dr9j7ls-2mazocq16am000\"><strong>专业特色：<\/strong>国家骨干专业、湖北省特色专业、全国现代学徒制试点专业。订单培养，企业承担学费，发放奖助学金。可以考取执业兽医资格证。全国动物防疫员大赛三等奖；中国小动物技能大赛影像学专赛一等奖。<\/p><p data-id=\"p1dr9j7ls-416l8xwcbf2000\"><strong>培养目标<\/strong><\/p><p data-id=\"p1dr9j7ls-349g9fkexbw000\">     培养社会发展需要的德智体美劳全面发展，掌握本专业知识和技能，面向畜禽饲养管理、畜禽繁殖、畜禽疾病防控、畜牧场废弃物处理与利用、畜牧场设备使用与维护、畜牧场经营与管理等岗位（群）工作的高素质技术技能人才。<\/p><p data-id=\"p1dr9j7ls-5dx36s4pd4o000\"><strong>主修课程<\/strong><\/p><p data-id=\"p1dr9j7ls-5jut2f34l70000\">     动物解剖生理、动物遗传育种、动物营养与饲料、动物病理、动物微生物与免疫技术、动物药理、动物传染病防治技术、养猪技术、养禽技术、养牛养羊技术、宠物疾病诊治技术。<\/p><p data-id=\"p1dr9j7ls-3klyg76v1xi000\"><strong>资格证书<\/strong><\/p><p data-id=\"p1dr9j7ls-l0ctc7wmokw00\">     家庭农场畜禽养殖职业技能等级证书、宠物护理与美容职业技能等级证书、执业兽医资格证。<\/p><p data-id=\"p1dr9j7ls-3lvzxvmo7b8000\"><strong>实训条件<\/strong><\/p><p data-id=\"p1dr9j7ls-3kgka53jayg000\">     校内建有兽医临床诊断实训室、动物饲料分析实训室、小动物手术室、显微镜实训室、VR实训室、动物解剖实训室。校外实训基地有武汉正大、松滋温氏等。<\/p><p data-id=\"p1dr9j7ls-31kt8slo6ge000\"><strong>就业方向<\/strong><\/p><p data-id=\"p1dr9j7ls-54gf022djes000\">     面向畜禽饲养管理、畜禽繁殖、畜禽疾病防控、畜牧场废弃物处理与利用、畜牧场设备使用与维护、畜牧场经营与管理等岗位（群）。<\/p>",
                    "pivot": {
                        "id": 42,
                        "faculty_id": 8,
                        "specialty_id": 42
                    }
                }, {
                    "id": 46,
                    "name": "园林技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p1dr9j7ls-4a51l9zlr6s000\"><strong>专业特色：<\/strong>校级特色专业，湖北省“园林景观设计”技能大赛二等奖，湖北省工匠杯智慧农业三等奖。<\/p><p data-id=\"p1dr9j7ls-4rpokst1ie0000\"><strong>培养目标<\/strong><\/p><p data-id=\"p1dr9j7ls-4dfxrp25dt4000\">     致力于培养具有一定科学文化水平，良好人文素养，职业道德和创新意识，同时具备园林技术的基础知识与技术技能，能从事园林苗木生产与销售、园林绿化设计与施工、园林绿化养护与管理等工作的高素质应用型人才。<\/p><p data-id=\"p1dr9j7ls-2wcs1rohz76000\"><strong>主修课程<\/strong><\/p><p data-id=\"p1dr9j7ls-203ncsbdx80000\">     植物生长与环境、园林测量、计算机辅助设计、园林植物识别、花卉生产与应用、园林植物栽培与养护、园林苗木生产与经营、园林植物有害生物防治、园林工程施工、园林植物景观设计、园林工程预决算等。<\/p><p data-id=\"p1dr9j7ls-38ahuo300js000\"><strong>资格证书<\/strong><\/p><p data-id=\"p1dr9j7ls-10juf4m1vncw00\">      园林绿化工、草坪园艺师、插花花艺师。<\/p><p data-id=\"p1dr9j7ls-540p1zfechk000\"><strong>实训条件<\/strong><\/p><p data-id=\"p1dr9j7ls-5esh2nleass000\">     校内具有数码互动显微实训室、花卉栽培实训室、园林制图实训室等；校外实训基地有荆州市白云绿化工程有限公司、湖北诚隆市政园林有限公司、深圳山河园林有限公司、湖北建艺风工程设计有限公司、湖北引瑞建设集团有限公司等。<\/p><p data-id=\"p1dr9j7ls-3u9bnh1gdc0000\"><strong>就业方向<\/strong><\/p><p data-id=\"p1dr9j7ls-22nnm67pbotc00\">     主要从事园林苗木生产与销售、园林绿化设计与施工、园林绿化养护与管理，从事园林苗木生产、园林绿化施工、园林植物养护等工作。<\/p>",
                    "pivot": {
                        "id": 46,
                        "faculty_id": 8,
                        "specialty_id": 46
                    }
                }, {
                    "id": 47,
                    "name": "动物医学",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p1dr9j7ls-5kpabf52kew000\"><strong>专业特色：<\/strong>现代学徒制人才培养模式，订单培养，企业承担学费，发放奖助学金。可以考取执业兽医资格证。创业率高。全国职业院校宠物美容大赛一等奖；世界宠物美容大赛三等奖；全国职业院校教训能力大赛三等奖。<\/p><p data-id=\"p1dr9j7ls-3vc2c1hpcxs000\"><strong>培养目标<\/strong><\/p><p data-id=\"p1dr9j7ls-ksgf1vr1l1s00\">     对接现代畜牧产业链和岗位群，以立德树人为根本任务，培养理想信念坚定，德智体美劳全面发展，具有“三农”情怀、扎实学识、良好技能、优良素质、创新精神，具备现代畜牧生产、动物疫病防治、宠物疾病诊疗等岗位职业能力的复合型高素质技术技能人才。<\/p><p data-id=\"p1dr9j7ls-5q7ccpc3ih4000\"><strong>主修课程<\/strong><\/p><p data-id=\"p1dr9j7ls-6rdexyayy8k00\">     动物解剖生理、动物药理、动物病理、动物外科与产科、禽病防治技术、猪病防治技术、牛羊病防治技术、动物疫病检验技术、动物性产品检验技术、动物流行病调查技术、宠物美容与护理等专业核心课程。<\/p><p data-id=\"p1dr9j7ls-36840lkxyig000\"><strong>资格证书<\/strong><\/p><p data-id=\"p1dr9j7ls-2pnh79lt2q2000\">     国家执业兽医师、动物疫病防治员、动物疫病检验检疫员、1+X 宠物护理与美容职业技能等级证书等。<\/p><p data-id=\"p1dr9j7ls-28b426for5q800\"><strong>实训条件<\/strong><\/p><p data-id=\"p1dr9j7ls-5ci4228v7vo000\">     （1）校内实训室：兽医临床诊断实训室、小动物外科手术实训室、显微镜实训室、动物标本室、VR实训室、动物解剖实训室、宠物美容与护理实训室；（2）校外实训基地：武汉正大、湖北正大、荆州市文湖动物医学、荆州市福心宠物医院等。<\/p><p data-id=\"p1dr9j7ls-j0xx0k6z6xk00\"><strong>就业方向<\/strong><\/p><p data-id=\"p1dr9j7ls-2snti0ptfco000\">     从事动物医疗行业的疾病诊疗、疾病化检与检测、技术服务及生产管理、以及宠物医疗、宠物美容、宠物用品生产与营销、宠物医院经营与<\/p><p data-id=\"p1dr9j7ls-4gwoq1nzznc000\">管理等工作，也可以报考县市畜牧兽医局等基层公务员。<\/p>",
                    "pivot": {
                        "id": 47,
                        "faculty_id": 8,
                        "specialty_id": 47
                    }
                }, {
                    "id": 53,
                    "name": "酿酒技术",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p1dr9j7ls-2s3gv969k0m000\"><strong>专业特色：<\/strong>湖北省高职院校中唯一一个以白酒酿造为主的专业。<\/p>",
                    "pivot": {
                        "id": 53,
                        "faculty_id": 8,
                        "specialty_id": 53
                    }
                }]
            }, {
                "id": 9,
                "name": "学前教育学院",
                "pid": 0,
                "type": 1,
                "sort": 9,
                "intro_type": 1,
                "intro_text": "<p data-id=\"pcf58394-f0G7eXE2\" style=\"text-align: center; line-height: 2;\">1、 院系基本情况介绍<\/p><p data-id=\"pjvuqoepo-1ftz7nzzdl400\" style=\"text-indent: 26pt; text-align: justify;\">学前教育学院办学秉承“高素质、厚基础、技能强、有特长”的办学理念，培养理想信念坚定，适应社会发展需要的德智体美劳全面发展，具有一定科学文化水平，良好的人文素养，职业道德和创新意识，精益求精的工匠精神，具备较强的就业能力和可持续发展的能力的高素质技术技能人才。学院现设有学前教育（国控）、早期教育（国控）、健身指导与管理三个专业。<\/p><p data-id=\"p1dr9j7ls-d1kii90f1bk0\">2、 院系荣誉：省级、国家荣誉<\/p><p data-id=\"p1dr9j7ls-zlwf6n799sw0\">（1）学生技能大赛成绩优异，项获国家级二等奖1项、三等奖1项；省级一等奖1项、二等奖6项、三等奖7项；<\/p><p data-id=\"p1dr9j7ls-2klf0u2e2s00\">（2）教育部1+X幼儿照护职业等级资格证书考评优秀站点。<\/p><p data-id=\"p1dr9j7ls-11rg2mx47su80\">（3）中国非物质文化传承—马山民歌、荆楚粉画名师工作室，魔音风筝、汉綉传承基地。<\/p><p data-id=\"p1dr9j7ls-gqccmiclnrk0\">（4）2020年获湖北省金牌活力团支部<\/p><p data-id=\"p1dr9j7ls-ulxvtvzh1s00\">（5）2023年湖北省第八届大学生艺术节优秀艺术实践工坊<\/p><p data-id=\"p1dr9j7ls-12hay9pjlc8w0\"><br><\/p>",
                "intro_url": "",
                "is_del": 0,
                "create_time": "2022-06-10 16:54:18",
                "update_time": "2024-06-06 19:15:31",
                "cooperation_college": "",
                "image_url": "",
                "child": [],
                "specialties": [{
                    "id": 50,
                    "name": "健身指导与管理",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p22j1hj1c-5ii742dnqcw000\" style=\"line-height: 2; text-indent: 30px;\"><strong>专业特色<\/strong>：本专业顺应国家“大健康”理念，培养从事全民健康、健身领域的高素质技术技能人才。学校拥有湖北省排名前列的综合性体育运动馆，实训设施设备配套齐全。专业对应行业、产业链丰富，毕业生就业面广，前景佳。<\/p><p data-id=\"pd2542d0-bWTM0fO3\" style=\"line-height: 2; text-indent: 13pt;\"><strong>培养目标<\/strong>：本专业培养理想信念坚定，适应社会发展需要的德智体美劳全面发展，适应我国体育社会化和产业化发展需要，具有社会体育、健身指导基本理论、知识与技能，能在社会体育领域从事社会体育活动的组织管理、健身咨询指导、经营开发以及教学科研等工作，为地方经济建设和社会发展培养高素质技术技能人才；<\/p><p data-id=\"p2krv9i1w-54s5o3f3g6g00\" style=\"text-indent: 13pt;\"><strong>主修课程<\/strong>：运动解剖学、运动生理学、体育保健康复、体育市场与营销、体育-体能训练、瑜伽、搏击操、体育舞蹈等；<\/p><p data-id=\"p2krv9i1w-54yzxeehd4400\" style=\"text-indent: 13pt;\"><strong>资格证书<\/strong>：1.社会体育指导员资格证  <\/p><p data-id=\"p2krv9i1w-1pm00tbibjsw0\" style=\"text-indent: 13pt;\">2.健身教练<\/p><p data-id=\"p2krv9i1w-k00r1056w1s00\" style=\"text-indent: 13pt;\">3.公共营养师<\/p><p data-id=\"p2krv9i1w-i94crzckbdc00\" style=\"text-indent: 13pt;\">4.体育教师资格证<\/p><p data-id=\"p2krv9i1w-ftz6nv59l5s00\" style=\"text-indent: 13pt;\"><strong>实训条件<\/strong>：学校配备综合体育馆，各类体育运动场地符合国际水平，配备专业健身房、体能测试室等满足教学日常所需；<\/p><p data-id=\"p1dr9j7ls-kugzp28983k00\" style=\"text-indent: 30px;\"><strong>就业方向：<\/strong><\/p><p data-id=\"p2krv9i1w-upx1tvrtkww0\" style=\"text-indent: 13pt;\">1.体育教师     <\/p><p data-id=\"p2krv9i1w-8eh51nimr8400\" style=\"text-indent: 13pt;\">2.健身教练<\/p><p data-id=\"p2krv9i1w-e5axpb48q3k00\" style=\"text-indent: 13pt;\">3.健身俱乐部销售经理<\/p><p data-id=\"p2krv9i1w-htvfn4kkym000\" style=\"text-indent: 13pt;\">4.社区体育指导员<\/p><p data-id=\"p2krv9i1w-488grttja9a00\" style=\"text-indent: 13pt;\">5.体育俱乐部策划与管理<\/p>",
                    "pivot": {
                        "id": 50,
                        "faculty_id": 9,
                        "specialty_id": 50
                    }
                }, {
                    "id": 49,
                    "name": "早期教育",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p2ol7mcaa-erscjscf1sw00\" style=\"text-indent: 13pt;\"><strong>专业特色：<\/strong>国家控制教育类师范专业。开设特色专业课程和实践课程，培养学生掌握婴幼儿生活照料、日常生活保健、婴幼儿动作技能训练和早期教育指导等技能，就业岗位稳定，工资待遇丰厚。<\/p><p data-id=\"pa028eb2-sdotRhV1\" style=\"text-align: center; text-indent: 13pt;\"><strong>培养目标<\/strong>：本专业培养理想信念坚定，适应社会发展需要的德智体美劳全面发展，面向婴幼儿托育中心、早期教育机构、托幼机构（托育）、幼儿艺术类培训机构等从事婴幼儿照护服务、婴幼儿保教、早期教育咨询指导等职业岗位的高素质技术技能人才；<\/p><p data-id=\"p2krv9i1w-dgo5pbua5d400\" style=\"text-indent: 13pt;\"><strong>主修课程<\/strong>：婴幼儿心理学、婴幼儿教育学、卫生保健、钢琴、舞蹈、美术、音乐素养、、教师口语、婴幼儿亲子活游戏设计与指导婴、幼儿家庭教养指导等；<\/p><p data-id=\"p2krv9i1w-5fq9cikwkm400\" style=\"text-indent: 13pt;\"><strong>资格证书<\/strong>：幼儿教师资格证、育婴员证、保育师证、幼儿照护等级证<\/p><p data-id=\"p2krv9i1w-9uxym2vucfk00\" style=\"text-indent: 13pt;\"><strong>实训条件<\/strong>：学院配备独栋实训大楼，配备钢琴房、形体舞蹈房、幼儿园仿真实训室、蒙台梭利教学实训室、奥尔夫音乐实训室、美术实训室、演播中心、微格教室等配套实训场所；<\/p><p data-id=\"p1dr9j7ls-8dqu7s0h8tg00\" style=\"text-indent: 30px;\"><strong>就业方向<\/strong>：<\/p><p data-id=\"p1dr9j7ls-4s8aq5mizhy00\">1.托幼机构教师<\/p><p data-id=\"p1dr9j7ls-40k68g61apm00\">2.家庭教育指导<\/p><p data-id=\"p1dr9j7ls-7ovde9u057o00\">3.育婴员、保育师<\/p><p data-id=\"p1dr9j7ls-65pyh2oj8yk00\">4.幼儿艺术类培训机构<\/p>",
                    "pivot": {
                        "id": 49,
                        "faculty_id": 9,
                        "specialty_id": 49
                    }
                }, {
                    "id": 48,
                    "name": "学前教育",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p data-id=\"p2ol7mcaa-257z0lowqd5s00\" style=\"text-indent: 13pt;\"><strong>专业特色<\/strong>：国家控制教育类师范专业。拥有高学历、高职称师资队伍；学校配套整栋学前实训大楼，实训条件优越；学生竞赛、特长提升、非遗技能等方面办学成果突出。培养的毕业生受到行业一致好评，就业率稳定95%以上。<\/p><p data-id=\"pa028eb2-y30YeQa1\" style=\"text-align: center; text-indent: 13pt;\"><strong>培养目标<\/strong>：本专业培养理想信念坚定，适应社会发展需要的德智体美劳全面发展，面向幼儿园、早教中心、幼儿培训机构、特殊儿童教育机构等的教师、育婴员、保育师、管理人员的职业岗位，能够从事学前儿童保育、教育等工作的高素质技术技能人才。<\/p><p data-id=\"p2krv9i1w-k2eal65o03400\" style=\"text-indent: 13pt;\"><strong>主修课程<\/strong>：学前心理学、学前教育学、卫生保健、钢琴、舞蹈、美术、音乐素养、教师口语、五大领域活动设计、幼儿行为观察与分析、幼儿游戏实践与指导等；<\/p><p data-id=\"p2krv9i1w-jdxl9z8um6g00\" style=\"text-indent: 13pt;\"><strong>资格证书<\/strong>：幼儿教师资格证、育婴员证、保育师证、舞蹈教师资格证；<\/p><p data-id=\"p2krv9i1w-c4b8ks1msu800\" style=\"text-indent: 13pt;\"><strong>实训条件<\/strong>：学院配备独栋实训大楼，配备钢琴房、形体舞蹈房、幼儿园仿真实训室、蒙台梭利教学实训室、奥尔夫音乐实训室、美术实训室、演播中心、微格教室等配套实训场所；<\/p><p data-id=\"p99zltr6o-e1h0gigbnlk00\" style=\"text-indent: 13pt;\"><strong>就业方向<\/strong>：<\/p><p data-id=\"p2krv9i1w-3sgb1ivnees00\" style=\"text-indent: 13pt;\">1. 幼儿园教师2.幼儿园保育员3.早教机构亲子教育专业教师<\/p><p data-id=\"p2krv9i1w-238cugpfutmo0\" style=\"text-indent: 13pt;\">4.社会培训机构各类艺术教师<\/p>",
                    "pivot": {
                        "id": 48,
                        "faculty_id": 9,
                        "specialty_id": 48
                    }
                }]
            }, {
                "id": 10,
                "name": "马克思主义学院",
                "pid": 0,
                "type": 1,
                "sort": 10,
                "intro_type": 1,
                "intro_text": "<div class=\"css-rm9irf am-engine\" data-element=\"root\"><p data-id=\"peefdd70-qdmFsBqr\" style=\"line-height: 2;\"><span style=\"font-size: 12px;\"><span style=\"color: #444444;\">版权所有Copyright(©)2017荆州职业技术学院.马克思主义学院　 　<\/span><\/span><\/p><p data-id=\"peefdd70-3CUhcROX\" style=\"line-height: 2;\"><span style=\"font-size: 12px;\"><span style=\"color: #444444;\">学院地址：湖北省荆州市学苑路21号　 　<\/span><\/span><\/p><p data-id=\"peefdd70-EsJYfce6\" style=\"line-height: 2;\"><span style=\"font-size: 12px;\"><span style=\"color: #444444;\">联系电话：0716-8022235　 　<\/span><\/span><\/p><p data-id=\"peefdd70-tSb3WPBp\" style=\"line-height: 2;\"><span style=\"font-size: 12px;\"><span style=\"color: #444444;\">院系：马克思主义学院<\/span><\/span><\/p><p data-id=\"peefdd70-Py3Qbj0O\" style=\"line-height: 2;\"><br><\/p><\/div>",
                "intro_url": "",
                "is_del": 0,
                "create_time": "2022-06-10 16:54:18",
                "update_time": "2022-06-10 16:54:18",
                "cooperation_college": "",
                "image_url": "",
                "child": [],
                "specialties": [{
                    "id": 51,
                    "name": "社区管理与服务",
                    "intro_type": 1,
                    "is_del": 0,
                    "intro_text": "<p style=\"line-height: 2; text-indent: 30px;\" data-id=\"pl2dpji2w-1c0jtu7m1e2o00\"><span style=\"font-size: 13px;\"><strong>专业特色<\/strong>：面向社区、企事业单位、两新组织等行业的党建党务、组织人事、党群工会、社会事务等工作岗位，培养具备组织协调、基层治理、宣传纪检、处突综治、文秘会务等方面能力的高素质技术技能人才。<\/span><\/p>",
                    "pivot": {
                        "id": 51,
                        "faculty_id": 10,
                        "specialty_id": 51
                    }
                }]
            }],
            "count": 10
        }
    );
})


app.get('/miniapp/bottom', (req, res) => {
    res.send(
        {
        "errcode": 0,
        "errmsg": "ok",
        "style": 1,
        "unchoose_color": "#7F8389",
        "choose_color": "#4a4a4a",
        "font_size": 20,
        "content": [{
            "id": 1,
            "name": "首页",
            "icon_url": "https:\/\/cos.schoolpi.net\/uploads\/icon\/20201117\/ff594b6249308864823ba011283a95de.png",
            "icon_name": "icon-home",
            "jump_url": "..\/..\/pages\/index\/index",
            "jump_name": "首页",
            "is_del": 0,
            "create_time": "2020-12-28 17:38:54",
            "update_time": "2020-12-28 17:38:54",
            "sort": 0,
            "extend": "",
            "jump_type": 1,
            "is_show": 1,
            "category_ids": 13,
            "base_url": "\/pages\/index\/index"
        }, {
            "id": 14,
            "name": "院系专业",
            "icon_url": "https:\/\/cos.schoolpi.net\/uploads\/icon\/20201113\/d160c7e484da265e3d0f6e0e8a72f2cc.png",
            "icon_name": "icon-zhuanye",
            "jump_url": "\/pages\/enroll-major-new\/enroll-major-new?fmType=1",
            "jump_name": "院系列表",
            "is_del": 0,
            "create_time": "2022-04-11 19:17:09",
            "update_time": "2022-04-11 19:17:09",
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
            "icon_url": "https:\/\/cos.schoolpi.net\/uploads\/icon\/20210121\/d7bc9b9d0a510882f30ae6fb6bf1e4db.png",
            "icon_name": "icon-wode",
            "jump_url": "..\/..\/pages\/my\/my",
            "jump_name": "个人中心",
            "is_del": 0,
            "create_time": "2020-12-28 17:38:54",
            "update_time": "2020-12-28 17:38:54",
            "sort": 9,
            "extend": "",
            "jump_type": 1,
            "is_show": 1,
            "category_ids": 25,
            "base_url": "\/pages\/my\/my"
        }]
    }
    );
});


// 创建一个简单的 POST 路由
app.post('/data', (req, res) => {
    const data = req.body;
    res.send(`You sent: ${JSON.stringify(data)}`);
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
