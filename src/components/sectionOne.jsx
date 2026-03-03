export default function FirstSection() {
    return (
      <div className="flex w-[950px] mx-auto mt-[110px] items-end">
        <div className="flex  flex-col gap-[25px]">
          <h1 className="text-4xl font-bold">A Simple Bookmark <br />Manager</h1>
          <p className="text-[16px] text-gray-500">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex gap-[14px]">
            <button className="w-[140px] h-[45px] rounded-[7px] border-2">Get it on Firefox</button>
            <button className="w-[140px] h-[45px] rounded-[7px] border-2">Get it on Chrome</button>
          </div>
        </div>
        <img className="w-[1000px] h-[300px]"
          src="https://famous-pithivier-11c029.netlify.app/img/tablet.svg"
          alt=""
        />
      </div>
    );
}