
import Image from "next/image";
export default function RecentWorkSection() {
    return (
        <div className="bg-primary-900 border border-primary-300/50 text-white rounded-2xl w-full max-w-3xl mx-auto overflow-hidden relative">
            <Image
                src="/images/laptop.png"
                alt="Hero Image"
                width={700}
                height={700}
                className="w-full max-w-[90%] md:max-w-sm lg:max-w-none"
            />
        </div>
    );
}