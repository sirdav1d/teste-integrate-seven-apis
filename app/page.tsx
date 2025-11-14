/** @format */

import { getData } from '@/actions/get-data';
import { Suspense } from 'react';

async function Data() {
	const data = await getData();
	return <pre className='text-xs'>{JSON.stringify(data, null, 2)}</pre>;
}

export default function Home() {
	return (
		<div className='flex min-h-screen items-center justify-center bg-zinc-50  dark:bg-black'>
			<main className='flex w-full flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start'>
				<div className='max-w-3xl mx-auto flex flex-col gap-5'>
					<h1 className='font-sans text-5xl tracking-wide text-center w-full'>
						Dados extraídos do Seven Apis
					</h1>
					<p className='text-lg'>Dados: </p>
					<Suspense fallback={'carregando...'}>
						<Data />
					</Suspense>
				</div>
			</main>
		</div>
	);
}
