// Google Sheets 配置
const SHEET_ID = '1wMH-vGM6BY-kh0fHDpJwsMlR28m66CemVViujBpZPVU'; // 替换为你的Google Sheet ID
const RANGE = 'Sheet1!B1:B2'; // 要获取的范围
const API_KEY = 'AIzaSyDCoRajSD0Eux3Yf7ZsiIt06ayoB_g1Tz0'; // 替换为你的API密钥

async function fetchVoteData() {
    try {
        // 使用 Google Sheets API 获取数据
        const response = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        const data = await response.json();

        if (data.values) {
            const candidate1 = parseInt(data.values[0][0]); // B1 单元格
            const candidate2 = parseInt(data.values[1][0]); // B2 单元格
            const totalVotes = candidate1 + candidate2;

            const candidate1Percentage = ((candidate1 / totalVotes) * 100).toFixed(1);
            const candidate2Percentage = ((candidate2 / totalVotes) * 100).toFixed(1);

            // 更新百分比显示
            document.getElementById('candidate1-percentage').textContent = `${candidate1Percentage}%`;
            document.getElementById('candidate2-percentage').textContent = `${candidate2Percentage}%`;

            // 更新柱状图高度
            document.getElementById('bar1').style.height = `${candidate1Percentage}%`;
            document.getElementById('bar1-label').textContent = `${candidate1Percentage}%`;

            document.getElementById('bar2').style.height = `${candidate2Percentage}%`;
            document.getElementById('bar2-label').textContent = `${candidate2Percentage}%`;
        }
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
    }
}

// 每分钟更新一次数据
setInterval(fetchVoteData, 60000);

// 初次加载数据
fetchVoteData();
