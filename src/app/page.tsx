import Image from 'next/image';
import quotationMark from '../../public/quotation-mark.svg';
import { fetchData } from './utils/api';
import { Page, PagesData } from './types/api';
import Newsletter from './sections/newsletter';

const getPageData = async (url: string) => {
  const { data: allPages } = await fetchData<PagesData[]>('pages');
  const page = allPages.find((item) => item.url === url);

  const { data } = await fetchData<Page>(`page/${page?.id}`);

  return data;
};

export default async function Page() {
  const data = await getPageData('/');

  const hero = data.sections?.find((item) => item.type === 'hero');
  const testimonial = data.sections.find((item) => item.type === 'testimonial');

  return (
    <main className="flex min-h-screen flex-col ">
      <section className="flex pt-32 pb-40 justify-center w-full">
        <div className="flex items-center max-w-[1400px] w-full flex-wrap px-32 gap-x-44">
          <h1 className="text-5xl font-medium leading-[64px] flex-1">
            {hero?.text}
          </h1>
          <div className="flex-1">
            {hero?.img && (
              <Image
                src={hero.img}
                alt="Female model"
                height={384}
                width={516}
                className="h-[384px] object-cover"
              />
            )}
          </div>
        </div>
      </section>
      <section className="flex justify-center h-[613px] bg-breally-black">
        <div className="max-w-[1400px] w-full px-32 pt-[132px]">
          <Image src={quotationMark} alt="quotation mark" />
          <p className="text-2xl font-extralight text-breally-light-gray mt-16 mb-24 w-[948px]">
            {testimonial?.text}
          </p>
          <p className="text-2xl font-light text-breally-gray ">
            {testimonial?.author}
          </p>
        </div>
      </section>
      <Newsletter />
    </main>
  );
}
