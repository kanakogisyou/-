// スコアを管理する変数
let score = 0;

// ボタンがクリックされたときに実行される関数
function add() {
  // 1. スコアを1増やす
  score++;
  
  // 2. HTML上の表示（id="score" の要素）を更新する
  document.getElementById("score").textContent = score;
}
