
import { Course } from "./Course";


function CourseListContainer(){
    const data = [
        {
            title: "Frond-end", 
            thumbnail: "/images/webdev.jpg",
            description: "Forum tanya jawab dan diskusi soal.",
            button: { label: "Lihat Detail", href: "https://example.com"}, 
        }, 
        {
            title: "Roboguru", 
            thumbnail: "/images/webdev.jpg",
            description: "Forum tanya jawab dan diskusi soal.",
            button: { label: "Lihat Detail", href: "https://example.com"}, 
        }, 
        {
            title: "Roboguru", 
            thumbnail: "/images/webdev.jpg",
            description: "Forum tanya jawab dan diskusi soal.",
            button: { label: "Lihat Detail", href: "https://example.com"}, 
        },
        {
            title: "Roboguru", 
            thumbnail: "/images/webdev.jpg",
            description: "Forum tanya jawab dan diskusi soal.",
            button: { label: "Lihat Detail", href: "https://example.com"}, 
        },
    ];
    return (
        <section className="page-center p-12 ">
          <h2 className="text-3xl font-semibold  mb-8">Berbagai solusi belajar lainnya untukmu</h2>
          <div className="mx-4 flex gap-10 text-light text-center w-full " >
          {data.map((item, index) => (
          <Course
            key={index}
            thumbnail={item.thumbnail}
            title={item.title}
            description={item.description}
          />
        ))}
          </div>
        </section>
    )
}


export { CourseListContainer}