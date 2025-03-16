const qs = require('qs');
const axios = require("axios");


const httpInstance = axios;
const baseUrl = "http://localhost:1337"

const getFaculties = async ({page, pageSize}) => {
    const query = qs.stringify(
        {
            pagination: {
                page: page,
                pageSize: pageSize,
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    return await httpInstance.get(`${baseUrl}/api/faculties?${query}`);
}

const getFacultyMajors = async ({faciltyId, page, pageSize}) => {
    const query = qs.stringify(
        {
            pagination: {
                page: page,
                pageSize: pageSize,
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    return await httpInstance.get(`${baseUrl}/api/faculties?${query}`);
}

const getFaculty = async ({id}) => {
    console.log(`${baseUrl}/api/faculties/${id}`)
    const query = qs.stringify(
        {
            populate: {
                faculty_majors: {
                    fields: ['name', 'intro_type', 'intro_text'],
                    filter: {
                        is_del: {
                            $eq: 0,
                        }
                    }
                },
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    return await httpInstance.get(`${baseUrl}/api/faculties/${id}?${query}`);
}

const test = async () => {
    const query = qs.stringify(
        {

        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    console.log(query)
    return await httpInstance.get(`${baseUrl}/api/contact-configs?${query}`);
}

// getFaculties(1, 10).then(res => {
//     console.log(res.data)
// })

getFaculties((1, 10)).then(res => {
    console.log(res.data)
})
