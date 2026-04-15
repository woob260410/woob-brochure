import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowDown, ChevronRight, Check } from "lucide-react";

const fonts = `
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;600&display=swap');

  body {
    font-family: 'Pretendard', sans-serif;
    background-color: #F9F8F6;
    color: #333333;
    overflow-x: hidden;
  }
  .font-serif {
    font-family: 'Noto Serif KR', serif;
  }
  
  /* 부드러운 스크롤 스냅 효과 (옵션) */
  html {
    scroll-behavior: smooth;
  }
  
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 스크롤 애니메이션 Hook
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
};

export default function App() {
  useScrollReveal();

  return (
    <div className="w-full min-h-screen bg-[#F9F8F6]">
      <style>{fonts}</style>

      {/* 헤더 */}
      <header className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
        <div className="font-serif text-xl tracking-widest uppercase">WooB</div>
        <div className="text-sm tracking-widest hidden md:block opacity-70">
          Premium Branding for Florists
        </div>
      </header>

      {/* Page 1 */}
      <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-16 gap-8 md:gap-16">
        <div className="w-full md:w-1/2 flex flex-col justify-center h-full z-10 fade-in pt-20 md:pt-0">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A362D] leading-[1.3] mb-8 break-keep">
            꽃집의 분위기까지
            <br />
            보여주는 디지털 배너
          </h1>
          <p className="text-[#333333] text-sm md:text-base leading-relaxed max-w-md break-keep opacity-80 mb-12">
            정성 들여 만든 작업물과 사장님만의 취향이 담긴 공간.
            <br />
            그 첫인상을 더 잘 보여주는 방식이 필요할 때,
            <br />
            WooB가 어울릴 수 있습니다.
          </p>
          <div className="mt-auto md:mt-0 flex items-center gap-4 text-[#1A362D] text-sm font-medium tracking-wide">
            <span className="w-8 h-[1px] bg-[#1A362D]"></span>
            첫인상까지 예쁜 꽃집으로
          </div>
        </div>
        <div
          className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative fade-in"
          style={{ transitionDelay: "0.2s" }}
        >
          <img
            src="https://images.unsplash.com/photo-1487035242901-d419a42d17af?q=80&w=2070&auto=format&fit=crop"
            alt="꽃다발을 든 사람의 감성적인 모습"
            className="w-full h-full object-cover rounded-tl-[80px] md:rounded-tl-[120px] rounded-br-[40px] shadow-sm"
          />
        </div>
      </section>

      {/* Page 2 */}
      <section className="w-full min-h-screen bg-[#E5DFD3] flex flex-col items-center justify-center p-6 md:p-24 relative overflow-hidden">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <div className="w-full md:w-3/5 h-[60vh] relative fade-in order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=2000&auto=format&fit=crop"
              alt="풍성하고 고급스러운 꽃다발"
              className="w-full h-full object-cover rounded-tr-[80px] rounded-bl-[80px] shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/5 flex flex-col fade-in order-1 md:order-2 pt-20 md:pt-0">
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A362D] leading-snug mb-8 break-keep">
              예쁜 꽃집일수록,
              <br />
              홍보도 분위기를
              <br />
              해치지 않아야 합니다
            </h2>
            <p className="text-[#333333] text-sm leading-relaxed opacity-80 mb-16 break-keep">
              어수선한 출력물과 과한 홍보물은
              <br />
              매장의 섬세한 분위기를 쉽게 깨뜨립니다.
              <br />
              꽃집의 감도에 맞는 방식으로
              <br />
              보여주는 것이 더 중요합니다.
            </p>
            <div className="text-[#D4A3A3] text-sm tracking-wide font-medium flex items-center gap-3">
              <span className="block w-2 h-2 rounded-full bg-[#D4A3A3]"></span>
              광고처럼 보이기보다, 매장처럼 보여야 하니까
            </div>
          </div>
        </div>
      </section>

      {/* Page 3 */}
      <section className="w-full min-h-screen bg-[#1A362D] text-white flex flex-col items-center justify-center p-6 md:p-24">
        <div className="max-w-5xl w-full text-center fade-in mb-16 pt-20 md:pt-0">
          <h2 className="font-serif text-3xl md:text-5xl leading-snug mb-8 break-keep">
            WooB는 광고 느낌보다
            <br />
            매장 무드에 더 집중합니다
          </h2>
          <p className="text-[#E5DFD3] text-sm md:text-base leading-relaxed opacity-90 max-w-lg mx-auto break-keep">
            꽃다발의 결, 꽃바구니의 색감, 시즌 꽃의 분위기를
            <br />
            움직이는 화면 안에 자연스럽게 담아냅니다.
            <br />
            억지로 튀기보다, 더 어울리게 보여줍니다.
          </p>
        </div>

        {/* 디스플레이 화면 예시 */}
        <div
          className="w-full max-w-3xl relative fade-in"
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="w-full aspect-video bg-black rounded-lg border-8 border-gray-900 shadow-2xl relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?q=80&w=2000&auto=format&fit=crop"
              alt="디스플레이 속 감성 꽃 영상"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
            {/* 가상의 UI 요소 */}
            <div className="absolute bottom-6 left-8 flex flex-col">
              <span className="font-serif text-2xl tracking-wide mb-1">
                Spring Collection
              </span>
              <span className="text-xs opacity-70 tracking-widest uppercase">
                The Floral Studio
              </span>
            </div>
          </div>
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-48 h-3 bg-gray-900 rounded-b-md"></div>
        </div>

        <div className="mt-24 text-[#E5DFD3] text-sm tracking-wide font-light fade-in">
          보기만 해도 들어가고 싶어지는 분위기
        </div>
      </section>

      {/* Page 4 */}
      <section className="w-full min-h-screen bg-[#F9F8F6] flex flex-col items-center justify-center p-6 md:p-16">
        <div className="text-center fade-in mb-16 pt-20 md:pt-0">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A362D] mb-6">
            감도 있는 꽃집 운영에 맞춘 3가지 선택
          </h2>
          <p className="text-[#333333] opacity-70 text-sm tracking-wide">
            우리 꽃집의 감도를 해치지 않는 방식으로
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl items-center justify-center">
          {/* Light */}
          <div className="w-full lg:w-1/4 bg-white p-8 border border-[#E5DFD3] flex flex-col fade-in h-[400px]">
            <div className="font-serif text-xl text-[#333333] mb-2">Light</div>
            <div className="text-2xl font-light text-[#1A362D] mb-6">
              968,000<span className="text-sm">원</span>
            </div>
            <p className="text-sm text-[#333333] opacity-70 leading-relaxed mb-auto break-keep">
              대표 무드를 간결하게
              <br />
              보여주는 시작
            </p>
            <div className="w-full h-[120px] bg-[#F9F8F6] mt-4 overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1490750967868-88cb4ecb07cb?q=80&w=800&auto=format&fit=crop"
                className="w-full h-full object-cover opacity-60"
                alt="라이트 무드"
              />
            </div>
          </div>

          {/* Premium (가장 크고 강조됨) */}
          <div
            className="w-full lg:w-2/5 bg-[#1A362D] text-white p-10 flex flex-col fade-in shadow-xl h-[500px] relative overflow-hidden"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="absolute top-0 right-0 bg-[#D4A3A3] text-[#1A362D] text-xs font-bold px-4 py-2 tracking-widest uppercase">
              Recommended
            </div>
            <div className="font-serif text-3xl mb-2">Premium</div>
            <div className="text-4xl font-light mb-8">
              1,815,000<span className="text-lg">원</span>
            </div>
            <p className="text-base text-[#E5DFD3] leading-relaxed mb-8 break-keep">
              매장전용 홈페이지까지 연결하는 브랜딩형.
              <br />
              꽃집의 브랜드 아이덴티티를 온전히 담아냅니다.
            </p>
            <div className="w-full h-[200px] mt-auto relative overflow-hidden rounded border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-full object-cover opacity-80"
                alt="프리미엄 브랜딩"
              />
            </div>
          </div>

          {/* Standard */}
          <div
            className="w-full lg:w-1/4 bg-white p-8 border border-[#E5DFD3] flex flex-col fade-in h-[400px]"
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="font-serif text-xl text-[#333333] mb-2">
              Standard
            </div>
            <div className="text-2xl font-light text-[#1A362D] mb-6">
              1,089,000<span className="text-sm">원</span>
            </div>
            <p className="text-sm text-[#333333] opacity-70 leading-relaxed mb-auto break-keep">
              계절별 분위기와 대표 작업물을
              <br />
              나눠 보여주는 운영
            </p>
            <div className="w-full h-[120px] bg-[#F9F8F6] mt-4 overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?q=80&w=800&auto=format&fit=crop"
                className="w-full h-full object-cover opacity-60"
                alt="스탠다드 무드"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Page 5 */}
      <section className="w-full min-h-screen bg-[#E5DFD3] flex flex-col items-center justify-center p-6 md:p-24">
        <div className="max-w-6xl w-full fade-in pt-20 md:pt-0">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A362D] mb-6">
              프리미엄 패키지는
              <br className="md:hidden" /> 이런 꽃집에 특히 잘 맞습니다
            </h2>
            <p className="text-[#333333] text-sm md:text-base opacity-80 leading-relaxed max-w-2xl mx-auto break-keep">
              웨딩, 행사, 공간장식, 고급 꽃다발, 주문제작 문의 비중이 높은 꽃집.
              <br />
              상품만이 아니라 매장 소개와 스타일, 문의 동선까지 자연스럽게
              연결하고 싶은 곳에 적합합니다.
            </p>
          </div>

          {/* 고객 문의 흐름도 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full mt-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
              <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-md p-2 flex flex-col relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop"
                  className="w-full h-2/3 object-cover rounded"
                  alt="화면 송출"
                />
                <div className="h-1/3 w-full flex items-center justify-center p-4 text-center">
                  <span className="text-sm font-serif">
                    매장 디스플레이
                    <br />
                    <span className="text-xs text-gray-400 sans-serif">
                      감성 영상 송출
                    </span>
                  </span>
                </div>
              </div>
              <span className="text-[#1A362D] font-bold">1. 화면 시청</span>
            </div>

            <div className="hidden md:block text-[#D4A3A3]">
              <ArrowRight size={32} strokeWidth={1} />
            </div>
            <div className="block md:hidden text-[#D4A3A3]">
              <ArrowDown size={32} strokeWidth={1} />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
              <div className="w-full aspect-[3/4] bg-[#F9F8F6] rounded-[30px] border-[8px] border-gray-800 shadow-xl p-0 relative overflow-hidden flex flex-col">
                <div className="h-12 w-full bg-white flex items-center justify-center border-b border-gray-100">
                  <span className="text-[10px] tracking-widest text-gray-500 uppercase">
                    Brand Home
                  </span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=600&auto=format&fit=crop"
                  className="w-full flex-grow object-cover"
                  alt="모바일 홈페이지"
                />
                <div className="absolute bottom-4 right-4 bg-white p-1 rounded shadow">
                  <div className="w-6 h-6 bg-black border-2 border-white flex items-center justify-center">
                    <span className="text-[8px] text-white">QR</span>
                  </div>
                </div>
              </div>
              <span className="text-[#1A362D] font-bold">
                2. QR / 모바일 웹 연결
              </span>
            </div>

            <div className="hidden md:block text-[#D4A3A3]">
              <ArrowRight size={32} strokeWidth={1} />
            </div>
            <div className="block md:hidden text-[#D4A3A3]">
              <ArrowDown size={32} strokeWidth={1} />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
              <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#1A362D] text-[#E5DFD3] flex items-center justify-center mb-4">
                  <Check size={32} />
                </div>
                <h4 className="font-serif text-lg mb-2 text-[#1A362D]">
                  Inquiry
                </h4>
                <div className="space-y-2 w-full">
                  <div className="h-8 bg-[#F9F8F6] rounded w-full flex items-center px-3 text-xs text-gray-400">
                    성함 / 연락처
                  </div>
                  <div className="h-8 bg-[#F9F8F6] rounded w-full flex items-center px-3 text-xs text-gray-400">
                    예약 희망일
                  </div>
                  <div className="h-16 bg-[#F9F8F6] rounded w-full flex items-start p-3 text-xs text-gray-400">
                    문의 내용
                  </div>
                </div>
              </div>
              <span className="text-[#1A362D] font-bold">
                3. 고급 문의 접수
              </span>
            </div>
          </div>

          <div className="mt-16 text-center text-[#1A362D] text-sm tracking-wide font-medium">
            예쁘다에서 끝나지 않고, 문의까지 이어지게
          </div>
        </div>
      </section>

      {/* Page 6 */}
      <section className="w-full min-h-[80vh] bg-[#F9F8F6] flex flex-col items-center justify-center p-6 md:p-24 border-t border-[#E5DFD3]">
        <div className="max-w-2xl w-full text-center fade-in">
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A362D] mb-8 leading-snug break-keep">
            우리 꽃집 무드에 맞는 시안,
            <br />
            먼저 받아보세요
          </h2>
          <p className="text-[#333333] text-sm md:text-base leading-relaxed opacity-80 mb-16 break-keep">
            매장 사진 1장과 대표 꽃 사진 3장만 보내주시면
            <br />
            사장님 꽃집 분위기에 맞춘 설치 예상 이미지를 먼저 보여드립니다.
          </p>

          <div className="text-[#1A362D] text-base md:text-lg tracking-wide font-medium">
            💬 지금 바로 담당자에게 시안 요청하기
          </div>
        </div>

        {/* 장식용 여백 요소 */}
        <div
          className="mt-24 w-px h-16 bg-[#1A362D] opacity-30 fade-in"
          style={{ transitionDelay: "0.3s" }}
        ></div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#1A362D] text-[#E5DFD3] py-12 px-6 md:px-24 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest opacity-90">
        <div className="font-serif text-xl mb-4 md:mb-0">WooB</div>
        <div className="text-center md:text-right space-y-2">
          <p>꽃집의 감도를 높이는 디지털 디스플레이 솔루션</p>
          <p className="opacity-50">
            © WooB Premium Branding. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
