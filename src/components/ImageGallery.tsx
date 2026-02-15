import image1 from 'figma:asset/f672a9116d9eaa7b6d7fa27fef5992c397211022.png';
import image2 from 'figma:asset/2855ad5c034a4a32cd6d5dc3610fd92138e537f5.png';
import image3 from 'figma:asset/1fc16eb5da7a45c853469b288bed9e6acab45e5d.png';

export function ImageGallery() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={image1}
              alt="설비 설치 현장"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={image2}
              alt="산업용 인버터 설비"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={image3}
              alt="인버터 제어 패널"
              className="w-full h-56 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
