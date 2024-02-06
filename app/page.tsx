import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className='flex flex-col gap-y-4'>
      <div>会員限定ページ</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
