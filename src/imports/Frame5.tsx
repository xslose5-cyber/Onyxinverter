import img1 from "figma:asset/9e11a6f6645defb694a4d02d70a244c67f617f2b.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[896px] left-0 top-0 w-[1600px]" data-name="전기제어반 작업 사진 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
    </div>
  );
}