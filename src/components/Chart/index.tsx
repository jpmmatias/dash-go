import { Box, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});
import { series } from './series';
import { options } from './options';

type Props = {
	title: string;
};

const Chart = ({ title }: Props) => {
	return (
		<Box bg='gray.800' borderRadius={8} p={8}>
			<Text fontSize='lg' mb='4'>
				{title}
			</Text>
			<ApexChart height={160} type='area' options={options} series={series} />
		</Box>
	);
};

export default Chart;
