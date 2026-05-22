const RATE_CARDS = {
  auckland: {
    label: "Auckland",
    source: "Auckland Report_20260522_0823.pdf",
    effectiveFrom: "01 Apr 2026",
    rates: [
      ["AUCKLAND", "1 - 1", 167, 40.00, 19.03],
      ["BLENHEIM", "1 - 1", 167, 44.00, 183.84],
      ["CHRISTCHURCH", "1 - 1", 167, 44.00, 172.20],
      ["CROMWELL", "1 - 1", 167, 44.00, 259.66],
      ["DUNEDIN", "1 - 1", 167, 44.00, 218.74],
      ["GISBORNE", "1 - 1", 167, 40.00, 95.14],
      ["GORE", "1 - 1", 167, 44.00, 243.17],
      ["GREYMOUTH", "1 - 1", 167, 44.00, 250.16],
      ["HAMILTON", "1 - 1", 167, 40.00, 47.01],
      ["INVERCARGILL", "1 - 1", 167, 44.00, 243.17],
      ["KAITAIA", "1 - 1", 167, 40.00, 95.14],
      ["LEVIN", "1 - 1", 167, 40.00, 88.42],
      ["NAPIER", "1 - 1", 167, 40.00, 82.83],
      ["NELSON", "1 - 1", 167, 44.00, 207.11],
      ["NEW PLYMOUTH", "1 - 1", 167, 40.00, 82.83],
      ["OAMARU", "1 - 1", 167, 44.00, 218.74],
      ["PALMERSTON NORTH", "1 - 1", 167, 40.00, 88.42],
      ["ROTORUA", "1 - 1", 167, 40.00, 53.73],
      ["TAUPO", "1 - 1", 167, 40.00, 61.57],
      ["TAURANGA", "1 - 1", 167, 40.00, 53.73],
      ["THAMES", "1 - 1", 167, 40.00, 53.73],
      ["TIMARU", "1 - 1", 167, 44.00, 218.74],
      ["WANGANUI", "1 - 1", 167, 40.00, 95.14],
      ["WELLINGTON", "1 - 1", 167, 40.00, 88.42],
      ["WHANGAREI", "1 - 1", 167, 40.00, 53.73],
    ],
  },
  nelson: {
    label: "Nelson",
    source: "Nelson Report_20260522_0825 (1).pdf",
    effectiveFrom: "01 Apr 2026",
    rates: [
      ["AUCKLAND", "1 - 2", 167, 41.00, 124.74],
      ["BLENHEIM", "1 - 2", 167, 38.00, 60.00],
      ["CHRISTCHURCH", "1 - 2", 167, 38.00, 71.50],
      ["CROMWELL", "1 - 2", 167, 41.00, 239.09],
      ["DUNEDIN", "1 - 2", 167, 38.00, 125.00],
      ["GISBORNE", "1 - 2", 167, 41.00, 306.65],
      ["GREYMOUTH", "1 - 2", 167, 38.00, 165.00],
      ["HAMILTON", "1 - 2", 167, 41.00, 220.37],
      ["INVERCARGILL", "1 - 2", 167, 38.00, 172.00],
      ["KAITAIA", "1 - 2", 167, 41.00, 190.23],
      ["LEVIN", "1 - 2", 167, 41.00, 130.98],
      ["NAPIER", "1 - 2", 167, 41.00, 193.35],
      ["NELSON", "1 - 2", 167, 38.00, 29.00],
      ["NEW PLYMOUTH", "1 - 2", 167, 41.00, 178.79],
      ["OAMARU", "1 - 2", 167, 38.00, 158.00],
      ["PALMERSTON NORTH", "1 - 2", 167, 41.00, 128.90],
      ["ROTORUA", "1 - 2", 167, 41.00, 241.16],
      ["TAUPO", "1 - 2", 167, 41.00, 257.80],
      ["TAURANGA", "1 - 2", 167, 41.00, 224.53],
      ["THAMES", "1 - 2", 167, 41.00, 170.48],
      ["TIMARU", "1 - 2", 167, 38.00, 118.00],
      ["WANGANUI", "1 - 2", 167, 41.00, 143.45],
      ["WELLINGTON", "1 - 2", 167, 41.00, 112.27],
      ["WHANGAREI", "1 - 2", 167, 41.00, 171.52],
    ],
  },
  newPlymouth: {
    label: "New Plymouth",
    source: "New Plymouth Report_20260522_0825.pdf",
    effectiveFrom: "01 Apr 2026",
    rates: [
      ["AUCKLAND", "1 - 1", 167, 35.00, 78.00],
      ["BLENHEIM", "1 - 1", 167, 38.00, 173.60],
      ["CHRISTCHURCH", "1 - 1", 167, 38.00, 164.24],
      ["CROMWELL", "1 - 1", 167, 38.00, 253.57],
      ["DUNEDIN", "1 - 1", 167, 38.00, 215.18],
      ["GISBORNE", "1 - 1", 167, 35.00, 125.00],
      ["GREYMOUTH", "1 - 1", 167, 38.00, 244.28],
      ["HAMILTON", "1 - 1", 167, 35.00, 65.00],
      ["INVERCARGILL", "1 - 1", 167, 38.00, 230.77],
      ["KAITAIA", "1 - 1", 167, 35.00, 147.50],
      ["LEVIN", "1 - 1", 167, 35.00, 78.00],
      ["NAPIER", "1 - 1", 167, 35.00, 78.00],
      ["NELSON", "1 - 1", 167, 38.00, 195.43],
      ["NEW PLYMOUTH", "1 - 2", 167, 35.00, 26.00],
      ["NEW PLYMOUTH", "3 - 4", 167, 35.00, 51.00],
      ["NEW PLYMOUTH", "5 - 6", 167, 35.00, 78.00],
      ["NEW PLYMOUTH", "7 - 8", 167, 35.00, 85.00],
      ["NEW PLYMOUTH", "9 - 10", 167, 35.00, 110.00],
      ["NEW PLYMOUTH", "11 - 13", 167, 35.00, 120.00],
      ["OAMARU", "1 - 1", 167, 38.00, 215.18],
      ["PALMERSTON NORTH", "1 - 1", 167, 35.00, 70.00],
      ["ROTORUA", "1 - 1", 167, 35.00, 97.50],
      ["TAUPO", "1 - 1", 167, 35.00, 97.50],
      ["TAURANGA", "1 - 1", 167, 35.00, 97.50],
      ["THAMES", "1 - 1", 167, 35.00, 97.50],
      ["TIMARU", "1 - 1", 167, 38.00, 206.86],
      ["WANGANUI", "1 - 5", 167, 35.00, 75.00],
      ["WELLINGTON", "1 - 1", 167, 35.00, 78.00],
      ["WHANGAREI", "1 - 1", 167, 35.00, 32.50],
    ],
  },
};

const els = {
  origin: document.querySelector("#origin"),
  destination: document.querySelector("#destination"),
  unit: document.querySelector("#unit"),
  length: document.querySelector("#length"),
  width: document.querySelector("#width"),
  height: document.querySelector("#height"),
  weight: document.querySelector("#weight"),
  faf: document.querySelector("#faf"),
  gst: document.querySelector("#gst"),
  filter: document.querySelector("#filter"),
  rateRows: document.querySelector("#rateRows"),
  total: document.querySelector("#total"),
  route: document.querySelector("#route"),
  actualM3: document.querySelector("#actualM3"),
  weightM3: document.querySelector("#weightM3"),
  chargeM3: document.querySelector("#chargeM3"),
  baseCharge: document.querySelector("#baseCharge"),
  m3Rate: document.querySelector("#m3Rate"),
  freight: document.querySelector("#freight"),
  fafAmount: document.querySelector("#fafAmount"),
  gstAmount: document.querySelector("#gstAmount"),
};

const money = new Intl.NumberFormat("en-NZ", {
  style: "currency",
  currency: "NZD",
});

const toNumber = (value) => {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
};

const formatM3 = (value) => `${value.toFixed(3)} m3`;
const rateKey = (rate) => `${rate[0]}|${rate[1]}`;

function normaliseRates(card) {
  return card.rates.map(([destination, areas, factor, base, perM3]) => ({
    destination,
    areas,
    factor,
    base,
    perM3,
    id: `${destination} (${areas})`,
  }));
}

function populateOrigins() {
  els.origin.innerHTML = Object.entries(RATE_CARDS)
    .map(([key, card]) => `<option value="${key}">${card.label}</option>`)
    .join("");
}

function populateDestinations() {
  const card = RATE_CARDS[els.origin.value];
  const options = normaliseRates(card)
    .map((rate, index) => `<option value="${index}">${rate.id}</option>`)
    .join("");
  els.destination.innerHTML = options;
}

function cubicMetres() {
  const length = toNumber(els.length.value);
  const width = toNumber(els.width.value);
  const height = toNumber(els.height.value);
  const divisor = { mm: 1000000000, cm: 1000000, m: 1 }[els.unit.value];
  return (length * width * height) / divisor;
}

function selectedRate() {
  const card = RATE_CARDS[els.origin.value];
  return normaliseRates(card)[Number.parseInt(els.destination.value, 10) || 0];
}

function calculate() {
  const rate = selectedRate();
  const actualM3 = cubicMetres();
  const weightM3 = toNumber(els.weight.value) / rate.factor;
  const chargeM3 = Math.max(actualM3, weightM3);
  const freight = rate.base + chargeM3 * rate.perM3;
  const fafAmount = freight * (toNumber(els.faf.value) / 100);
  const gstBase = freight + fafAmount;
  const gstAmount = els.gst.checked ? gstBase * 0.15 : 0;
  const total = gstBase + gstAmount;

  els.total.textContent = money.format(total);
  els.route.textContent = `${RATE_CARDS[els.origin.value].label} to ${rate.id}`;
  els.actualM3.textContent = formatM3(actualM3);
  els.weightM3.textContent = formatM3(weightM3);
  els.chargeM3.textContent = formatM3(chargeM3);
  els.baseCharge.textContent = money.format(rate.base);
  els.m3Rate.textContent = `${money.format(rate.perM3)} / m3`;
  els.freight.textContent = money.format(freight);
  els.fafAmount.textContent = money.format(fafAmount);
  els.gstAmount.textContent = money.format(gstAmount);

  renderRows();
}

function renderRows() {
  const rate = selectedRate();
  const activeKey = rateKey([rate.destination, rate.areas]);
  const filter = els.filter.value.trim().toLowerCase();
  const card = RATE_CARDS[els.origin.value];
  els.rateRows.innerHTML = normaliseRates(card)
    .filter((item) => item.id.toLowerCase().includes(filter))
    .map((item) => `
      <tr class="${rateKey([item.destination, item.areas]) === activeKey ? "active" : ""}">
        <td>${item.destination}</td>
        <td>${item.areas}</td>
        <td>${item.factor}</td>
        <td>${money.format(item.base)}</td>
        <td>${money.format(item.perM3)}</td>
      </tr>
    `)
    .join("");
}

populateOrigins();
populateDestinations();
calculate();

[
  els.destination,
  els.unit,
  els.length,
  els.width,
  els.height,
  els.weight,
  els.faf,
  els.gst,
  els.filter,
].forEach((element) => element.addEventListener("input", calculate));

els.origin.addEventListener("input", () => {
  populateDestinations();
  calculate();
});
