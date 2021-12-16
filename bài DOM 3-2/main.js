let student_warning = {
    students: [
        {
            name: "Lê Hoài Nam",
            email: "namlehoai@gmail.com",
            phone: "123456789",
            total_off: 2,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Xin nghỉ ốm",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "05-09-2020",
                    note: "Buồn vì thất tình",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
        {
            name: "Đỗ Đăng Nguyên",
            email: "nguyen@gmail.com",
            phone: "0123987654",
            total_off: 2,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Mưa to nên ngại đi học",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "05-09-2020",
                    note: "Trượt lô, nên rút học phí để đánh",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
        {
            name: "Nguyễn Xuân Ba",
            email: "3nx92nd@gmail.com",
            phone: "0344005987",
            total_off: 3,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Đang training không đi học được",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "07-09-2020",
                    note: "Soạn giáo án đặc vụ 0175",
                    teacher: "Nguyễn Hàn Duy",
                },
                {
                    date: "10-09-2020",
                    note: "Ganks team còng lưng nên chưa đi học được",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
    ],
    class: "Lập trình Game 2D Canvas",
    course: "Lập trình Game",
    sessions: 14,
    teachers: [
        {
            name: "Bùi Hiên",
            email: "hien@techmaster.vn",
            phone: "0123456789",
        },
        {
            name: "Nguyễn Hàn Duy",
            email: "duy@techmaster.vn",
            phone: "0987654321",
        },
    ],
};

const classInnerEL = document.querySelector('.class-inner')
const studentTableEL = document.querySelector('table tbody')
// Hiển thị thông tin học viên
function renderStudentInfo(arr) {
    studentTableEL.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        const s = arr[i]; // object student

        for (let j = 0; j < s.detail_info.length; j++) {
            const d = s.detail_info[j]; // object detail_info

            // Chỉ gộp hàng nếu là bản ghi đầu tiên
            if(j == 0) {
                studentTableEL.innerHTML += `
                    <tr>
                        <td rowspan="${s.total_off}">${i + 1}</td>
                        <td rowspan="${s.total_off}">${s.name}</td>
                        <td rowspan="${s.total_off}">${s.email}</td>
                        <td rowspan="${s.total_off}">${s.phone}</td>
                        <td rowspan="${s.total_off}" class="text-center">${s.total_off}/${s.sessions}</td>
                        <td class="text-center">${d.date}</td>
                        <td>${d.note}</td>
                        <td>${d.teacher}</td>
                    </tr>
                `
            } else {
                studentTableEL.innerHTML += `
                    <tr>
                        <td class="text-center">${d.date}</td>
                        <td>${d.note}</td>
                        <td>${d.teacher}</td>
                    </tr>
                `
            }

        }

    }
}
renderStudentInfo(student_warning.students)



// Hiển thị thông tin lớp học
function renderClassInfo(obj) {
    // teachers = obj.teachers.map(teacher => {
    //     return `<li>${teacher.name} ( ${teacher.email} - ${teacher.phone} )</li>`
    // }).join("")

    let teachers = ""
    for (let i = 0; i < obj.teachers.length; i++) {
        const t = obj.teachers[i];
        teachers += `<li>${t.name} ( ${t.email} - ${t.phone} )</li>`
    }

    classInnerEL.innerHTML = `
        <p><span>Lớp học</span> : ${obj.class}</p>
        <p><span>Thuộc khóa học</span> : ${obj.course}</p>
        <p><span>Danh sách giảng viên</span> :</p>
        <ul>${teachers}</ul>
        <p></p>
        <p><span>Tổng số buổi</span> : ${obj.sessions}</p>
    `
}
renderClassInfo(student_warning)