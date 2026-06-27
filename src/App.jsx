import { useState } from "react";

const SECTIONS = [
  {
    id: 1,
    title: "Section 1",
    subtitle: "Horizontal Analysis",
    color: "#C0392B",
    slides: [
      {
        title: "1.1 Tổng quan kết quả kinh doanh",
        type: "Overview",
        bullets: [
          "Doanh thu thuần tăng liên tục: +3,66% (2024) → +9,10% (2025)",
          "Lợi nhuận từ HĐKD giảm cả hai năm: -1,51% (2024), -4,88% (2025)",
          "EBT: tăng nhẹ +0,63% (2024) → giảm mạnh -8,28% (2025)",
          "EAT: +2,72% (2024) → -4,25% (2025)",
          "⚠️ Mâu thuẫn: doanh thu tăng nhưng lợi nhuận lại giảm",
        ],
        visual: "📊 Bảng so sánh dạng hàng ngang với mũi tên tăng/giảm màu xanh/đỏ",
        note: "Highlight rõ nghịch lý: doanh thu tăng nhưng lợi nhuận giảm",
      },
      {
        title: "1.2 Phân tích Doanh thu",
        type: "Revenue",
        bullets: [
          "2024: Doanh thu chính +3,66% nhưng thu nhập tài chính giảm -40,38%",
          "2024: Thu nhập khác tăng cao nhất 51,38% → chất lượng tăng trưởng chưa bền vững",
          "2025: Doanh thu chính dẫn đầu +9,10% → cơ cấu doanh thu cải thiện rõ rệt",
          "2025: Thu nhập tài chính phục hồi +11,39%; thu nhập khác giảm -56,84%",
          "✅ 2025 có chất lượng doanh thu tốt hơn 2024",
        ],
        visual: "📈 Biểu đồ cột nhóm 3 loại doanh thu qua 3 năm",
        note: "Nhấn mạnh shift từ thu nhập bất thường sang doanh thu cốt lõi",
      },
      {
        title: "1.3 Phân tích Lợi nhuận",
        type: "Profit",
        bullets: [
          "Lợi nhuận gộp 2024: +13,68% → COGS tăng chậm hơn doanh thu (✅)",
          "Lợi nhuận gộp 2025: +4,39% → COGS tăng nhanh hơn doanh thu (⚠️)",
          "Lợi nhuận khác 2024: +63,84% → cứu vớt EBT khỏi sụt giảm",
          "Lợi nhuận khác 2025: -68,44% → kéo thêm EBT xuống",
          "Thuế hoãn lại (-1491,57% năm 2025) giảm nhẹ tác động cho EAT",
        ],
        visual: "📊 Waterfall chart dòng lợi nhuận từ Gross → EBT → EAT",
        note: "So sánh đóng góp của từng yếu tố vào biến động EBT",
      },
      {
        title: "1.4 Phân tích Chi phí",
        type: "Expense",
        bullets: [
          "COGS 2024: +3,07% < doanh thu 3,66% → hiệu quả tốt",
          "COGS 2025: +9,41% > doanh thu 9,10% → biên gộp bị nén",
          "Chi phí bán hàng: +11,35% (2024) → cải thiện còn +7,02% (2025)",
          "G&A: luôn tăng nhanh hơn doanh thu (9,62% và 14,63%) → kiểm soát yếu",
          "⚠️ Lãi vay 2025 tăng đột biến +40,49% → áp lực tài chính lớn",
        ],
        visual: "📊 Biểu đồ so sánh tốc độ tăng các loại chi phí vs doanh thu",
        note: "Dùng bar chart với đường ngang đánh dấu mức tăng doanh thu làm chuẩn",
      },
    ],
  },
  {
    id: 2,
    title: "Section 2",
    subtitle: "Vertical Analysis",
    color: "#1F618D",
    slides: [
      {
        title: "2.1 Cơ cấu dọc kết quả kinh doanh",
        type: "Structure",
        bullets: [
          "Giá vốn luôn chiếm ~94% doanh thu: 94,43% → 93,89% → 94,15%",
          "Chi phí bán hàng: 4,43% → 4,76% → 4,67% (tăng rồi giảm nhẹ)",
          "Lợi nhuận từ HĐKD/doanh thu: 1,39% → 1,32% → 1,15% (liên tục giảm)",
          "EBT/doanh thu: 1,44% → 1,40% → 1,18% (xu hướng giảm)",
          "ROS (lợi nhuận sau thuế): 1,12% → 1,11% → 0,98%",
        ],
        visual: "📊 Stacked bar chart 100% cho từng năm, highlight các lớp lợi nhuận",
        note: "Minh họa 'mỗi 100 VND doanh thu → bao nhiêu VND lợi nhuận'",
      },
      {
        title: "2.2 Cơ cấu lợi nhuận trước thuế",
        type: "Profit Mix",
        bullets: [
          "Lợi nhuận HĐKD: 51,51% → 69,61% → 63,45% (chiếm tỷ trọng lớn nhất)",
          "Lợi nhuận tài chính: 45,42% → 25,11% → 34,82% (biến động lớn)",
          "Lợi nhuận khác: 3,07% → 5,28% → 1,73% (nhỏ, không bền vững)",
          "✅ 2024: cơ cấu lợi nhuận tốt nhất - HĐKD chiếm 69,61%",
          "⚠️ 2025: HĐKD giảm, lợi nhuận tài chính tăng → chất lượng giảm",
        ],
        visual: "🥧 Pie chart/donut chart cơ cấu EBT cho 3 năm đặt cạnh nhau",
        note: "Nhấn mạnh năm 2024 là năm có cơ cấu chất lượng cao nhất",
      },
    ],
  },
  {
    id: 3,
    title: "Section 3",
    subtitle: "Asset Size & Structure",
    color: "#117A65",
    slides: [
      {
        title: "3.1 Biến động quy mô tài sản",
        type: "Fluctuation",
        bullets: [
          "Tổng tài sản: 79.676 tỷ → 81.275 tỷ (+2%) → 85.855 tỷ (+6%)",
          "2024: Tài sản ngắn hạn tăng 4%; Tài sản dài hạn giảm 3%",
          "2025: Đảo chiều - Tài sản dài hạn tăng mạnh 21% (đầu tư tài chính DH +109%)",
          "Phải thu ngắn hạn tăng mạnh: +14% (2024) và +28% (2025)",
          "⚠️ Tiền và tương đương tiền giảm -29% năm 2025 → thanh khoản căng",
        ],
        visual: "📊 Biểu đồ cột chồng: Tài sản NH vs DH qua 3 năm + đường tổng tài sản",
        note: "Highlight sự đảo chiều chiến lược từ 2024 sang 2025",
      },
      {
        title: "3.2 Cơ cấu tài sản",
        type: "Structure",
        bullets: [
          "2023-2024: Tài sản NH chiếm 71,93% → 73,26% (chủ đạo, thanh khoản cao)",
          "2025: Tài sản NH giảm xuống 69,37%, Tài sản DH tăng lên 30,63%",
          "Đầu tư TC DH: 6,04% → 3,96% → 7,84% (tăng vọt năm 2025)",
          "Phải thu NH 2025: trở thành thành phần lớn nhất tài sản NH (18,60%)",
          "Tiền giảm: 17,63% → 18,37% → 12,43% → rủi ro thanh khoản tăng",
        ],
        visual: "📊 Stacked bar chart 100% cơ cấu tài sản qua 3 năm",
        note: "Cho thấy xu hướng: 2024 tập trung thanh khoản; 2025 chuyển sang đầu tư DH",
      },
    ],
  },
  {
    id: 4,
    title: "Section 4",
    subtitle: "Capital Size & Structure",
    color: "#7D3C98",
    slides: [
      {
        title: "4.1 Biến động quy mô nguồn vốn",
        type: "Fluctuation",
        bullets: [
          "Tổng nguồn vốn: +2,01% (2024) và +5,64% (2025)",
          "Nợ phải trả tăng nhanh hơn VCSH ở cả hai năm",
          "⚠️ Chi phí phải trả ngắn hạn 2025 tăng đột biến +955,74% (+4.042 tỷ)",
          "Vay NH: giảm -9,15% (2024) nhưng tăng trở lại +4,03% (2025)",
          "VCSH rất ổn định: chỉ tăng +0,36% (2024) và +0,87% (2025)",
        ],
        visual: "📊 Biểu đồ cột: Nợ phải trả vs VCSH qua 3 năm + mũi tên % thay đổi",
        note: "Nhấn mạnh rủi ro từ chi phí phải trả ngắn hạn tăng đột biến",
      },
      {
        title: "4.2 Cơ cấu nguồn vốn",
        type: "Structure",
        bullets: [
          "Tỷ lệ nợ: 63,35% → 63,94% → 65,57% (tăng dần)",
          "Hệ số tự chủ tài chính: 36,65% → 36,06% → 34,43% (giảm dần)",
          "Nợ ngắn hạn chiếm chủ đạo: 62,33% → 62,97% → 64,47%",
          "Nợ dài hạn rất thấp: chỉ ~1% → phụ thuộc hoàn toàn vào nợ NH",
          "Hệ số đòn bẩy tài chính (EM): 2,73 → 2,77 → 2,90 (tăng liên tục)",
        ],
        visual: "📊 Donut chart cơ cấu VCSH vs Nợ + Gauge chart hệ số tự chủ",
        note: "Kết luận: cơ cấu nặng nợ NH, rủi ro thanh khoản cao",
      },
    ],
  },
  {
    id: 5,
    title: "Section 5",
    subtitle: "Sources & Uses of Funds",
    color: "#D35400",
    slides: [
      {
        title: "5.1 Bảng cân đối kế toán rút gọn",
        type: "Balance Sheet",
        bullets: [
          "Tài sản NH: 57.307 tỷ → 59.544 tỷ → 59.561 tỷ",
          "Tài sản DH: 22.369 tỷ → 21.731 tỷ → 26.294 tỷ",
          "Nợ NH: 49.661 tỷ → 51.180 tỷ → 55.354 tỷ",
          "VCSH: 29.202 tỷ → 29.308 tỷ → 29.562 tỷ (rất ổn định)",
          "Tổng tài sản: 79.676 tỷ → 81.275 tỷ → 85.855 tỷ",
        ],
        visual: "📋 Bảng CĐKT rút gọn 2 cột (Tài sản | Nguồn vốn) cho 3 năm",
        note: "Đây là bảng nền tảng dẫn vào phân tích nguồn và sử dụng vốn",
      },
      {
        title: "5.2 Nguồn & Sử dụng vốn 2023-2024",
        type: "Fund Flow",
        bullets: [
          "Sử dụng vốn chủ yếu: Phải thu NH (31,83%), Hàng tồn kho (22,08%), Tiền (18,91%)",
          "Nguồn vốn: Thanh lý đầu tư DH (34%), Giảm đầu tư NH (29,64%), Tăng nợ NH (32,46%)",
          "✅ Phù hợp nguyên tắc: Tài sản DH được tài trợ từ nguồn DH",
          "✅ Nợ NH được dùng tài trợ đúng Tài sản NH",
          "→ Cơ cấu nguồn và sử dụng vốn CÂN ĐỐI và AN TOÀN",
        ],
        visual: "🔄 Sơ đồ Sankey/Flow diagram: Nguồn ← → Sử dụng",
        note: "Giai đoạn 2023-2024 là mẫu phân bổ vốn lành mạnh",
      },
      {
        title: "5.3 Nguồn & Sử dụng vốn 2024-2025 + Đánh giá",
        type: "Fund Flow + Match",
        bullets: [
          "Sử dụng chủ yếu: Đầu tư TC DH (31,85%), Phải thu NH (31,79%), Đầu tư TC NH (24,93%)",
          "Nguồn vốn: Giảm tiền (38,61%), Tăng nợ NH (37,87%), Giảm HTK (16,43%)",
          "⚠️ MẤT CÂN ĐỐI: Dùng nguồn NH (tiền + vay NH) để đầu tư DH (31,85%)",
          "Equity ratio: 36,65% → 36,06% → 34,43% (giảm dần)",
          "Equity Multiplier: 2,73 → 2,77 → 2,90 (đòn bẩy tăng cao)",
        ],
        visual: "⚠️ Sơ đồ mũi tên: Nguồn NH → Sử dụng DH (có dấu cảnh báo đỏ)",
        note: "2024-2025 vi phạm nguyên tắc cân đối, tạo rủi ro thanh khoản",
      },
    ],
  },
  {
    id: 6,
    title: "Section 6",
    subtitle: "Financial Balance",
    color: "#1A5276",
    slides: [
      {
        title: "6. Phân tích cân bằng tài chính",
        type: "Balance",
        bullets: [
          "NWC > 0 cả 3 năm → CÂN BẰNG TÀI CHÍNH AN TOÀN",
          "NWC: 7.646 tỷ (2023) → 8.364 tỷ (2024) → 4.207 tỷ (2025)",
          "2024: Vốn DH tài trợ TSNH tăng từ 13,34% lên 14,05% → an toàn hơn",
          "2025: Vốn DH tài trợ TSNH giảm còn 7,06%; TSNH phụ thuộc 92,94% vào vốn NH",
          "⚠️ Không dùng vốn NH để tài trợ TSDH (NWC > 0) nhưng biên an toàn co hẹp mạnh",
        ],
        visual: "📊 Biểu đồ thanh: NWC qua 3 năm + hình ảnh minh họa NWC > 0",
        note: "Vẽ sơ đồ: [Vốn DH] - [TSDH] = NWC (minh họa cân bằng tài chính)",
      },
    ],
  },
  {
    id: 7,
    title: "Section 7",
    subtitle: "Working Capital Req.",
    color: "#7B241C",
    slides: [
      {
        title: "7.1 Nhu cầu vốn lưu động (WCR)",
        type: "WCR",
        bullets: [
          "WCR: 26.782 tỷ (2023) → 25.748 tỷ (2024, -3,86%) → 22.292 tỷ (2025, -13,42%)",
          "WCR giảm liên tục: Nợ kinh doanh tăng nhanh hơn tài sản NH",
          "2024: TSNH tăng 2.237 tỷ nhưng nợ kinh doanh tăng 3.270 tỷ → WCR giảm",
          "2025: TSNH gần bằng phẳng; nợ kinh doanh tăng 3.474 tỷ → WCR giảm mạnh",
          "✅ Khai thác tốt tín dụng thương mại từ nhà cung cấp",
        ],
        visual: "📉 Biểu đồ đường WCR qua 3 năm + breakdown TSNH vs Nợ kinh doanh",
        note: "WCR giảm là tín hiệu tốt - công ty dùng tín dụng nhà cung cấp hiệu quả hơn",
      },
      {
        title: "7.2 Nguồn tài trợ WCR",
        type: "Funding Source",
        bullets: [
          "NWC/WCR: 28,55% → 32,48% → 18,87% (tăng rồi giảm mạnh)",
          "2024: Tỷ lệ NWC/WCR tăng → vốn DH tài trợ nhiều hơn → AN TOÀN hơn",
          "2025: NWC giảm -49,70% vì đầu tư TSDH tăng 21%",
          "2025: Phải tăng vay NH +700 tỷ để bù đắp → RỦI RO REFINANCING cao",
          "⚠️ NWC/WCR 2025 giảm xuống 18,87% → phụ thuộc nhiều vào vốn ngắn hạn",
        ],
        visual: "📊 Biểu đồ cột chồng: Phần WCR được tài trợ bởi NWC vs Vay NH",
        note: "So sánh chiến lược bảo thủ (2024) vs chiến lược tích cực (2025)",
      },
    ],
  },
  {
    id: 8,
    title: "Section 8",
    subtitle: "Net Cash Flow",
    color: "#145A32",
    slides: [
      {
        title: "8.1 Dòng tiền từ hoạt động kinh doanh",
        type: "Operating CF",
        bullets: [
          "2023: +5.274 tỷ; 2024: +2.373 tỷ (-55%); 2025: +3.990 tỷ (+68%)",
          "2024 giảm mạnh: phải thu +4,14 tỷ bị khóa; HTK +3,69 tỷ bị ứ đọng",
          "2025 phục hồi: HTK giải phóng +2,78 tỷ; KPT từ nhà cung cấp +2,94 tỷ",
          "Dòng tiền HĐ > EBT (2023, 2025) → chất lượng lợi nhuận cao",
          "Dòng tiền HĐ < EBT (2024) → lợi nhuận chưa được chuyển hóa thành tiền",
        ],
        visual: "📊 Biểu đồ cột dòng tiền HĐ 3 năm + line EBT để so sánh",
        note: "Phân tích khoảng cách NOCF vs EBT để đánh giá chất lượng lợi nhuận",
      },
      {
        title: "8.2 Khả năng thanh toán từ dòng tiền",
        type: "Ratios",
        bullets: [
          "Khả năng trả lãi vay: 5,87 → 4,18 → 5,00 (✅ Luôn > 3 → AN TOÀN)",
          "Khả năng trả nợ gốc: 0,27 → 0,13 → 0,21 (⚠️ Luôn < 1 → Chưa đủ)",
          "Khả năng trả nợ DH đến hạn: 28,27 → 14,36 → 32,54 (✅ Rất tốt, >> 1)",
          "Khả năng phân phối lợi nhuận: 1,71 → 0,75 → 1,32 (2024 dưới 1 ⚠️)",
          "→ Nợ ngắn hạn quá lớn; khả năng xoay vòng tốt nhưng áp lực refinancing cao",
        ],
        visual: "📋 Bảng 4 chỉ số + màu Xanh/Đỏ theo ngưỡng chuẩn (≥1 hoặc ≥3)",
        note: "Dùng icon ✅/⚠️ để tạo trực quan ngay trên slide",
      },
      {
        title: "8.3 Dòng tiền từ hoạt động đầu tư",
        type: "Investing CF",
        bullets: [
          "2023: -7.074 tỷ; 2024: +2.553 tỷ (đảo chiều do thu hồi tiền gửi); 2025: -7.319 tỷ (tái đầu tư)",
          "2024: Giảm giải ngân tiền gửi -5.726 tỷ; thu hồi tiền gửi +6.913 tỷ",
          "2025: Tăng giải ngân tiền gửi +27.026 tỷ; chi TSCĐ tăng +667 tỷ (+33%)",
          "Dòng tiền ĐT bị chi phối bởi tiền gửi có kỳ hạn, không phải TSCĐ",
          "⚠️ 2025: tái phân bổ vốn quy mô lớn → gây thâm hụt tiền ròng toàn năm",
        ],
        visual: "📊 Biểu đồ thác nước (waterfall) dòng tiền đầu tư 2 năm so sánh",
        note: "Nhấn mạnh: biến động do quản lý tiền gửi, không phải đầu tư tài sản cố định",
      },
      {
        title: "8.4 Dòng tiền từ hoạt động tài chính",
        type: "Financing CF",
        bullets: [
          "2023: +4.242 tỷ; 2024: -4.044 tỷ (-195%); 2025: -929 tỷ (cải thiện)",
          "Vòng quay vay nợ hàng năm > 70.000 tỷ → cơ cấu vay tái tục ngắn hạn",
          "2024: Giảm vay mới 13,35% + cổ tức tăng vọt +91,63% → thâm hụt tài chính",
          "2025: Vay mới phục hồi +15,27% → thu hẹp thâm hụt tài chính",
          "Cổ tức tăng liên tục: cơ cấu tài chính ưu tiên phân phối cho cổ đông",
        ],
        visual: "📊 Biểu đồ cột: Vay mới / Trả nợ / Cổ tức qua 3 năm",
        note: "Làm rõ mô hình vay tái tục quy mô lớn đặc trưng của Petrolimex",
      },
      {
        title: "8.5 Dòng tiền thuần tổng hợp",
        type: "Net CF Summary",
        bullets: [
          "Dòng tiền thuần: +2.441 tỷ (2023) → +883 tỷ (2024, -63,85%) → -4.257 tỷ (2025)",
          "2024: HĐ và TC giảm, được bù bởi ĐT tăng mạnh (+9.626 tỷ)",
          "2025: ĐT giảm -9.870 tỷ lấn át sự phục hồi của HĐ và TC",
          "⚠️ 2025: lần đầu tiên dòng tiền thuần âm (-4.257 tỷ)",
          "→ Tiền và tương đương tiền giảm từ 14.933 tỷ xuống 10.676 tỷ",
        ],
        visual: "📊 Biểu đồ cột nhóm: 3 loại dòng tiền + đường dòng tiền thuần",
        note: "Slide tổng kết - nên đặt cuối cùng như 'big picture' của toàn bộ Section 8",
      },
    ],
  },
];

export default function SlidePlanner() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const section = SECTIONS[activeSection];
  const slide = section.slides[activeSlide];

  const handleSectionChange = (idx) => {
    setActiveSection(idx);
    setActiveSlide(0);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", display: "flex", height: "100vh", background: "#F0F2F5", overflow: "hidden" }}>
      {/* Left sidebar - sections */}
      <div style={{ width: "200px", background: "#1C1C3A", color: "white", display: "flex", flexDirection: "column", overflowY: "auto" }}>
        <div style={{ padding: "16px 12px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ fontSize: "11px", color: "#aaa", marginBottom: "4px" }}>NHÓM 5 | CFA</div>
          <div style={{ fontSize: "13px", fontWeight: "700", lineHeight: "1.3" }}>Petrolimex<br />Slide Guide</div>
        </div>
        {SECTIONS.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => handleSectionChange(idx)}
            style={{
              background: idx === activeSection ? s.color : "transparent",
              color: "white",
              border: "none",
              padding: "12px",
              textAlign: "left",
              cursor: "pointer",
              borderLeft: idx === activeSection ? "4px solid white" : "4px solid transparent",
              transition: "all 0.15s",
            }}
          >
            <div style={{ fontSize: "10px", opacity: 0.7, marginBottom: "2px" }}>{s.title}</div>
            <div style={{ fontSize: "12px", fontWeight: "600", lineHeight: "1.3" }}>{s.subtitle}</div>
            <div style={{ fontSize: "10px", opacity: 0.6, marginTop: "2px" }}>{s.slides.length} slide{s.slides.length > 1 ? "s" : ""}</div>
          </button>
        ))}
      </div>

      {/* Middle - slide navigator */}
      <div style={{ width: "220px", background: "#2C2C4A", color: "white", overflowY: "auto" }}>
        <div style={{ padding: "14px 12px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ fontSize: "11px", opacity: 0.6 }}>SLIDES</div>
          <div style={{ fontSize: "13px", fontWeight: "700", color: section.color, marginTop: "2px" }}>{section.subtitle}</div>
        </div>
        {section.slides.map((sl, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            style={{
              width: "100%",
              background: idx === activeSlide ? "rgba(255,255,255,0.1)" : "transparent",
              color: "white",
              border: "none",
              padding: "12px",
              textAlign: "left",
              cursor: "pointer",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <div style={{
                width: "24px", height: "24px",
                background: idx === activeSlide ? section.color : "rgba(255,255,255,0.15)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "11px", fontWeight: "700", flexShrink: 0,
              }}>
                {idx + 1}
              </div>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "600", lineHeight: "1.3" }}>{sl.title.split(" ").slice(0, 5).join(" ")}...</div>
                <div style={{ fontSize: "10px", opacity: 0.5, marginTop: "2px" }}>{sl.type}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Main content - slide preview */}
      <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
        {/* Slide header */}
        <div style={{
          background: "white",
          borderRadius: "12px",
          padding: "24px",
          marginBottom: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          borderTop: `4px solid ${section.color}`,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: "11px", color: section.color, fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>
                {section.title} · {section.subtitle} · Slide {activeSlide + 1}/{section.slides.length}
              </div>
              <h2 style={{ margin: "6px 0 0", fontSize: "20px", color: "#1C1C3A", fontWeight: "700" }}>{slide.title}</h2>
            </div>
            <span style={{
              background: section.color + "20",
              color: section.color,
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "11px",
              fontWeight: "700",
            }}>{slide.type}</span>
          </div>
        </div>

        {/* Slide mock */}
        <div style={{
          background: "white",
          borderRadius: "12px",
          padding: "32px",
          marginBottom: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Slide aspect ratio: 16:9 mock */}
          <div style={{
            background: "#F8F9FA",
            borderRadius: "8px",
            padding: "28px 32px",
            minHeight: "320px",
            border: "1px solid #E8E8E8",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Slide top bar */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: "6px", background: `linear-gradient(90deg, ${section.color}, ${section.color}88)`,
            }} />

            <div style={{ display: "flex", gap: "24px", height: "100%", paddingTop: "12px" }}>
              {/* Left: Content */}
              <div style={{ flex: 3 }}>
                <div style={{ fontSize: "13px", color: "#888", marginBottom: "8px", fontWeight: "600" }}>
                  {section.title} | {section.subtitle}
                </div>
                <h3 style={{ margin: "0 0 20px", fontSize: "18px", color: "#1C1C3A", fontWeight: "700", lineHeight: "1.3" }}>
                  {slide.title}
                </h3>
                <ul style={{ margin: 0, padding: "0 0 0 0", listStyle: "none" }}>
                  {slide.bullets.map((b, i) => (
                    <li key={i} style={{
                      padding: "7px 0",
                      borderBottom: i < slide.bullets.length - 1 ? "1px solid #F0F0F0" : "none",
                      fontSize: "13px",
                      color: b.includes("⚠️") ? "#C0392B" : b.includes("✅") ? "#117A65" : "#2C3E50",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      lineHeight: "1.4",
                    }}>
                      <span style={{ flexShrink: 0, marginTop: "2px", color: section.color }}>›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Visual placeholder */}
              <div style={{
                flex: 2,
                background: section.color + "10",
                borderRadius: "8px",
                border: `1px dashed ${section.color}50`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                minWidth: "160px",
              }}>
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>
                  {slide.visual.split(" ")[0]}
                </div>
                <div style={{
                  fontSize: "11px",
                  color: section.color,
                  textAlign: "center",
                  fontWeight: "600",
                  lineHeight: "1.4",
                }}>
                  {slide.visual.slice(slide.visual.indexOf(" ") + 1)}
                </div>
              </div>
            </div>

            {/* Slide footer */}
            <div style={{
              position: "absolute", bottom: "10px", right: "20px",
              fontSize: "10px", color: "#BDC3C7",
            }}>
              Vietnam National Petroleum Group · CFA Group 5
            </div>
          </div>
        </div>

        {/* Note */}
        <div style={{
          background: "#FFF9E6",
          borderRadius: "8px",
          padding: "14px 16px",
          border: "1px solid #F0D060",
          display: "flex",
          gap: "10px",
          alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "16px" }}>💡</span>
          <div>
            <div style={{ fontSize: "11px", fontWeight: "700", color: "#886600", marginBottom: "2px" }}>GHI CHÚ THIẾT KẾ</div>
            <div style={{ fontSize: "13px", color: "#5D4A00" }}>{slide.note}</div>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
          <button
            onClick={() => {
              if (activeSlide > 0) setActiveSlide(activeSlide - 1);
              else if (activeSection > 0) {
                const prevSection = SECTIONS[activeSection - 1];
                setActiveSection(activeSection - 1);
                setActiveSlide(prevSection.slides.length - 1);
              }
            }}
            disabled={activeSection === 0 && activeSlide === 0}
            style={{
              background: "#1C1C3A",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "13px",
              opacity: activeSection === 0 && activeSlide === 0 ? 0.4 : 1,
            }}
          >
            ← Slide trước
          </button>

          <div style={{ fontSize: "12px", color: "#888", alignSelf: "center" }}>
            Section {activeSection + 1}/{SECTIONS.length} · Slide {activeSlide + 1}/{section.slides.length}
          </div>

          <button
            onClick={() => {
              if (activeSlide < section.slides.length - 1) setActiveSlide(activeSlide + 1);
              else if (activeSection < SECTIONS.length - 1) {
                setActiveSection(activeSection + 1);
                setActiveSlide(0);
              }
            }}
            disabled={activeSection === SECTIONS.length - 1 && activeSlide === section.slides.length - 1}
            style={{
              background: section.color,
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "13px",
              opacity: activeSection === SECTIONS.length - 1 && activeSlide === section.slides.length - 1 ? 0.4 : 1,
            }}
          >
            Slide tiếp →
          </button>
        </div>
      </div>
    </div>
  );
}
