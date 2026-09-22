(function () {
  var boards = {};
  var current = { board: null, index: 0 };
  var lb, imgEl, captionEl, closeBtn, prevBtn, nextBtn;

  function buildBoards() {
    document.querySelectorAll(".hobby-board").forEach(function (board) {
      var key = board.dataset.board;
      var imgs = Array.from(board.querySelectorAll(".hobby-photo-grid img")).map(function (img) {
        return { src: img.getAttribute("src"), alt: img.getAttribute("alt") };
      });
      boards[key] = imgs;
    });
  }

  function show() {
    var list = boards[current.board];
    var item = list[current.index];
    imgEl.src = item.src;
    imgEl.alt = item.alt;
    captionEl.textContent = item.alt + " (" + (current.index + 1) + " of " + list.length + ")";
    prevBtn.hidden = nextBtn.hidden = list.length < 2;
  }

  function open(boardKey, index) {
    current.board = boardKey;
    current.index = index;
    show();
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function next() {
    var list = boards[current.board];
    current.index = (current.index + 1) % list.length;
    show();
  }

  function prev() {
    var list = boards[current.board];
    current.index = (current.index - 1 + list.length) % list.length;
    show();
  }

  function close() {
    lb.hidden = true;
    document.body.style.overflow = "";
  }

  document.addEventListener("DOMContentLoaded", function () {
    lb = document.getElementById("lightbox");
    if (!lb) return;

    imgEl = document.getElementById("lightbox-img");
    captionEl = document.getElementById("lightbox-caption");
    closeBtn = document.getElementById("lightbox-close");
    prevBtn = document.getElementById("lightbox-prev");
    nextBtn = document.getElementById("lightbox-next");

    buildBoards();

    document.querySelectorAll(".hobby-board").forEach(function (board) {
      var key = board.dataset.board;
      board.querySelectorAll(".hobby-photo-grid button").forEach(function (btn, index) {
        btn.addEventListener("click", function () {
          open(key, index);
        });
      });
    });

    closeBtn.addEventListener("click", close);
    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);
    lb.addEventListener("click", function (e) {
      if (e.target === lb) close();
    });
    document.addEventListener("keydown", function (e) {
      if (lb.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });
  });
})();
