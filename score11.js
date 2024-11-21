function fetchVoteData() {
    // 模拟数据
    const candidate1 = Math.floor(Math.random() * 1000);
    const candidate2 = Math.floor(Math.random() * 1000);
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
  
  // 每2秒更新一次模拟数据
  setInterval(fetchVoteData, 2000);
  