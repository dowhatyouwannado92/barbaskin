const products = [
  {
    name: "오후 번들거림 컷 세안젤",
    category: "세안",
    target: "오후만 되면 얼굴에 기름 올라오는 남자",
    summary: "아침에 씻었는데 오후 3시쯤 얼굴이 번들거리는 사람에게 맞춘 가벼운 세안젤입니다.",
    specs: {
      "추천 대상": "지성 / 복합성",
      "사용 시간": "아침 또는 저녁",
      "사용 난이도": "물 묻히고 30초",
      "남자식 한 줄": "기름기 정리부터 시작",
    },
    tags: ["지성", "상쾌함", "입문"],
  },
  {
    name: "20초 수분 크림",
    category: "보습",
    target: "세수 후 얼굴이 팽팽하게 당기는 남자",
    summary: "세수하고 나면 얼굴이 조이는 사람에게 필요한 기본 보습템입니다. 끈적임을 싫어하는 입문자에게 맞췄습니다.",
    specs: {
      "추천 대상": "건성 / 당김형",
      "끈적임": "낮음",
      "향": "거의 없음",
      "사용 난이도": "세수 후 바르면 끝",
    },
    tags: ["건성", "끈적임 낮음", "무향"],
  },
  {
    name: "출근용 가벼운 선크림",
    category: "선크림",
    target: "선크림 답답해서 안 바르는 남자",
    summary: "백탁과 답답함 때문에 선크림을 포기했던 사람을 위한 데일리 선크림입니다. 아침 루틴 마지막에 바르면 됩니다.",
    specs: {
      "추천 대상": "선크림 입문자",
      "백탁": "낮음",
      "추천 시간": "외출 전",
      "남자식 한 줄": "세월 방어막",
    },
    tags: ["백탁 낮음", "데일리", "세월방패"],
  },
  {
    name: "면도 후 진정 로션",
    category: "면도",
    target: "면도하고 얼굴 빨개지는 남자",
    summary: "면도 후 따갑고 붉어지는 피부를 빠르게 진정시키는 로션입니다. 애프터쉐이브가 부담스러운 사람에게 좋습니다.",
    specs: {
      "추천 대상": "면도 후 붉은기형",
      "향": "은은함",
      "사용 시간": "면도 직후",
      "사용 난이도": "손바닥에 덜어 바르기",
    },
    tags: ["진정", "저자극", "면도후"],
  },
  {
    name: "귀찮음 최상 올인원",
    category: "올인원",
    target: "여러 개 바르는 순간 포기하는 남자",
    summary: "스킨, 로션, 크림을 따로 바르는 순간 포기하는 사람을 위한 최소 루틴 제품입니다. 일단 하나라도 꾸준히 바르게 만드는 게 목표입니다.",
    specs: {
      "추천 대상": "관리 입문자",
      "단계": "1단계",
      "향": "약함",
      "남자식 한 줄": "안 바르는 것보다 훨씬 낫다",
    },
    tags: ["한 번에", "쉬움", "입문"],
  },
  {
    name: "첫 향수 시트러스 머스크",
    category: "향수",
    target: "향수 처음이라 과한 향이 부담스러운 남자",
    summary: "진한 향보다 씻고 나온 듯한 인상을 원하는 입문자용 향수입니다. 출근, 약속, 소개팅 전에도 부담이 적습니다.",
    specs: {
      "추천 대상": "향수 입문자",
      "향 느낌": "상쾌함 / 차분함",
      "추천 상황": "출근 / 데일리",
      "지속감": "중간",
    },
    tags: ["데일리", "은은함", "출근"],
  },
  {
    name: "운동 후 바디워시",
    category: "바디",
    target: "운동하고 땀 냄새가 신경 쓰이는 남자",
    summary: "운동 후 땀과 답답함을 산뜻하게 정리하는 바디워시입니다. 향이 너무 강한 제품이 부담스러운 사람에게 맞습니다.",
    specs: {
      "추천 대상": "운동 후 샤워 루틴",
      "향": "상쾌함",
      "사용 시간": "운동 후 / 저녁",
      "남자식 한 줄": "냄새 말고 개운함",
    },
    tags: ["상쾌함", "바디", "운동후"],
  },
  {
    name: "두피 개운 샴푸",
    category: "두피",
    target: "머리 감아도 금방 답답한 남자",
    summary: "두피가 쉽게 답답해지고 기름지는 사람을 위한 데일리 샴푸입니다. 향보다 개운한 사용감에 초점을 맞췄습니다.",
    specs: {
      "추천 대상": "두피 답답함형",
      "사용 시간": "매일 샤워",
      "향": "가벼움",
      "사용 난이도": "평소처럼 감기",
    },
    tags: ["두피", "개운함", "데일리"],
  },
  {
    name: "입술 생존 립밤",
    category: "보습",
    target: "겨울마다 입술 터지는데 아무거나 바르던 남자",
    summary: "번들거리거나 색이 도는 립밤이 부담스러운 사람을 위한 무색 립밤입니다. 주머니에 넣고 건조할 때만 바르면 됩니다.",
    specs: {
      "추천 대상": "입술 건조형",
      "색": "무색",
      "휴대성": "높음",
      "남자식 한 줄": "입술 터지고 후회하지 않기",
    },
    tags: ["무색", "휴대용", "생존템"],
  },
  {
    name: "손등 갈라짐 핸드크림",
    category: "바디",
    target: "손 씻고 나면 손등이 하얗게 뜨는 남자",
    summary: "손 씻은 뒤 손등이 하얗게 뜨거나 갈라지는 사람에게 맞춘 핸드크림입니다. 끈적임이 적어 일할 때도 부담이 낮습니다.",
    specs: {
      "추천 대상": "손 건조형",
      "끈적임": "낮음",
      "향": "거의 없음",
      "추천 시간": "손 씻은 뒤",
    },
    tags: ["끈적임 낮음", "무향", "겨울"],
  },
];

const productGrid = document.querySelector("#productGrid");
const filters = document.querySelector("#filters");
const categories = ["전체", ...new Set(products.map((product) => product.category))];

function renderFilters(activeCategory = "전체") {
  filters.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-button ${category === activeCategory ? "active" : ""}" data-category="${category}">
          ${category}
        </button>
      `
    )
    .join("");
}

function renderProducts(activeCategory = "전체") {
  const visibleProducts =
    activeCategory === "전체"
      ? products
      : products.filter((product) => product.category === activeCategory);

  productGrid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card" tabindex="0" role="button" aria-label="${product.name} 상세 보기" data-name="${product.name}">
          <div class="product-visual">${product.category}</div>
          <h3>${product.name}</h3>
          <p>${product.target}</p>
          <div class="product-meta">
            ${product.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function openProductModal(product) {
  const modal = document.querySelector("#productModal");
  document.querySelector("#modalCategory").textContent = product.category;
  document.querySelector("#modalTitle").textContent = product.name;
  document.querySelector("#modalSummary").textContent = product.summary;
  document.querySelector("#modalSpecs").innerHTML = Object.entries(product.specs)
    .map(([label, value]) => `<div><span>${label}</span><b>${value}</b></div>`)
    .join("");
  modal.hidden = false;
  document.body.classList.add("modal-open");
  document.querySelector(".modal-close").focus();
}

function closeProductModal() {
  document.querySelector("#productModal").hidden = true;
  document.body.classList.remove("modal-open");
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const category = button.dataset.category;
  renderFilters(category);
  renderProducts(category);
});

productGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".product-card");
  if (!card) return;

  const product = products.find((item) => item.name === card.dataset.name);
  if (product) openProductModal(product);
});

productGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const card = event.target.closest(".product-card");
  if (!card) return;

  event.preventDefault();
  const product = products.find((item) => item.name === card.dataset.name);
  if (product) openProductModal(product);
});

document.querySelector(".modal-close").addEventListener("click", closeProductModal);
document.querySelector("#modalCloseButton").addEventListener("click", closeProductModal);
document.querySelector("#productModal").addEventListener("click", (event) => {
  if (event.target.id === "productModal") closeProductModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProductModal();
});

document.querySelector("#quizForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = new FormData(event.currentTarget);
  const dryness = form.get("dryness");
  const oil = form.get("oil");
  const barrier = form.get("barrier");
  const result = document.querySelector("#quizResult");

  let title = "귀찮음 최상 입문형";
  let description = "여러 단계보다 세안제, 올인원, 선크림부터 시작하는 편이 좋습니다.";

  if (oil === "oily") {
    title = "오후 번들거림 방치형";
    description = "가벼운 세안젤과 답답하지 않은 선크림 조합부터 추천합니다.";
  }

  if (dryness === "dry") {
    title = "세수 후 당김형";
    description = "끈적임 낮은 수분 크림을 세수 후 20초 안에 바르는 루틴이 맞습니다.";
  }

  if (barrier === "steps") {
    title = "단계 거부 올인원형";
    description = "처음엔 제품 수를 줄이는 게 중요합니다. 올인원과 선크림만 잡아도 출발입니다.";
  }

  result.innerHTML = `
    <p class="eyebrow">진단 결과</p>
    <h3>${title}</h3>
    <p>${description}</p>
    <a class="button primary" href="#products">추천 상품 보러가기</a>
  `;
});

renderFilters();
renderProducts();
