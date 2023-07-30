import Link from 'next/link';
import { fetchData } from '../utils/api';
import { generatePageName } from '../utils/formatters';
import Image from 'next/image';
import logo from '../../../public/logo.svg';

type PageData = {
  url: string;
  id: string;
};

export default async function Navbar() {
  const pagesData = await fetchData<PageData[]>('pages');

  return (
    <header className="flex justify-center border-b-[1px] border-breally-light-gray">
      <nav className="flex items-center w-full max-w-[1400px] h-24 px-16">
        <Image src={logo} alt="logo" className="mr-24" />
        {pagesData.map(({ url, id }) => (
          <Link href={url} key={id} className="mr-12">
            {generatePageName(url)}
          </Link>
        ))}
        <Link
          href="#contact"
          className="flex items-center justify-center ml-auto w-48 h-12 rounded-3xl bg-breally-purple"
        >
          Contact us
        </Link>
      </nav>
    </header>
  );
}
