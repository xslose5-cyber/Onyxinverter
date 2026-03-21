import image1 from 'figma:asset/f672a9116d9eaa7b6d7fa27fef5992c397211022.png';
import image2 from 'figma:asset/2855ad5c034a4a32cd6d5dc3610fd92138e537f5.png';
import image3 from 'figma:asset/1fc16eb5da7a45c853469b288bed9e6acab45e5d.png';

export function ImageGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-blue-600 tracking-[0.2em] uppercase mb-3">
            Our Work
          </p>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
            시공 현장
          </h2>
          <div className="w-12 h-[2px] bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="overflow-hidden rounded-xl group">
            <img
              src={image1}
              alt="설비 설치 현장"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-xl group">
            <img
              src={image2}
              alt="산업용 인버터 설비"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-xl group">
            <img
              src={image3}
              alt="인버터 제어 패널"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
