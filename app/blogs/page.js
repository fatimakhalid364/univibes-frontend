import { Hero } from "@/components/blogs/Hero";
import { Featured } from "@/components/blogs/Featured";
import { Latest } from "@/components/blogs/Latest";

export default function Blogs() {
    return (
        <>
            <Hero/>
            <Featured />
            <Latest />
        </>
    );
}