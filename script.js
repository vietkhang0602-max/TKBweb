const quizData = [
    {
        q: "Bạn thấy thú vị với công việc nào nhất?",
        o: [
            { t: "Lắp ráp, cài đặt và sửa chữa phần cứng máy tính", s: "IT Support" },
            { t: "Thiết lập hệ thống mạng Wi-Fi và bảo mật nội bộ", s: "Network Admin" },
            { t: "Quản lý hệ thống máy chủ và dữ liệu đám mây", s: "System Engineer" }
        ]
    },
    {
        q: "Khi một máy tính trong mạng không vào được Internet, bạn sẽ làm gì?",
        o: [
            { t: "Kiểm tra cáp mạng và card mạng của máy đó", s: "IT Support" },
            { t: "Kiểm tra cấu hình IP và thông số trên Router", s: "Network Admin" },
            { t: "Kiểm tra dịch vụ cấp phát địa chỉ (DHCP) trên Server", s: "System Engineer" }
        ]
    },
    {
        q: "Kỹ năng nào bạn muốn làm chủ nhất trong tương lai?",
        o: [
            { t: "Xử lý sự cố linh hoạt cho người dùng chuyên nghiệp", s: "IT Support" },
            { t: "Thiết kế hạ tầng mạng quy mô lớn cho doanh nghiệp", s: "Network Admin" },
            { t: "Tự động hóa việc vận hành hệ thống bằng Script", s: "System Engineer" }
        ]
    },
    {
        q: "Môi trường làm việc lý tưởng của bạn là gì?",
        o: [
            { t: "Làm việc trực tiếp, hỗ trợ kỹ thuật tại các văn phòng", s: "IT Support" },
            { t: "Làm việc tại trung tâm điều hành mạng (NOC)", s: "Network Admin" },
            { t: "Làm việc tại các trung tâm dữ liệu (Data Center) hiện đại", s: "System Engineer" }
        ]
    },
    {
        q: "Bạn ưu tiên yếu tố nào nhất trong hệ thống CNTT?",
        o: [
            { t: "Sự thuận tiện và hài lòng của người sử dụng", s: "IT Support" },
            { t: "Sự kết nối thông suốt và bảo mật đường truyền", s: "Network Admin" },
            { t: "Sự ổn định và toàn vẹn của dữ liệu hệ thống", s: "System Engineer" }
        ]
    }
];


let currentQ = 0;
let results = { "IT Support": 0, "Network Admin": 0, "System Engineer": 0 };


function startQuiz() {
    currentQ = 0;
    results = { "IT Support": 0, "Network Admin": 0, "System Engineer": 0 };
    renderQuestion();
}


function renderQuestion() {
    const area = document.getElementById('question-area');
    const data = quizData[currentQ];


    let options = data.o.map(opt =>
        `<button class="quiz-option" onclick="handleSelect('${opt.s}')">${opt.t}</button>`
    ).join('');


    area.innerHTML = `
        <div class="quiz-header">Câu hỏi ${currentQ + 1} / ${quizData.length}</div>
        <h3 class="quiz-q">${data.q}</h3>
        <div class="options-list">${options}</div>
    `;
}


function handleSelect(type) {
    results[type]++;
    currentQ++;
    if(currentQ < quizData.length) renderQuestion();
    else showFinalResult();
}


function showFinalResult() {
    const area = document.getElementById('question-area');
    const winner = Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);
   
    let desc = "";
    if(winner === "IT Support") desc = "Bạn là người nhiệt tình, thích giúp đỡ và giỏi xử lý các tình huống thực tế ngay lập tức.";
    if(winner === "Network Admin") desc = "Bạn có tư duy logic tốt, thích xây dựng các con đường kết nối dữ liệu an toàn.";
    if(winner === "System Engineer") desc = "Bạn là người cẩn thận, yêu thích sự bao quát và muốn làm chủ các hệ thống máy chủ lớn.";


    area.innerHTML = `
        <div class="result-box">
            <div class="quiz-header">Kết quả trắc nghiệm</div>
            <p>Bạn có tố chất phù hợp nhất để trở thành:</p>
            <h2 style="color:var(--primary); margin: 15px 0; font-size: 2rem;">${winner}</h2>
            <p style="color: var(--text-muted); margin-bottom: 30px;">${desc}</p>
            <button onclick="startQuiz()" class="btn">Làm lại bài Quiz</button>
        </div>
    `;
}

