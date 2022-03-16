import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

type Props = {
	showProfileDetails: boolean;
};

export default function Profile({ showProfileDetails }: Props) {
	return (
		<Flex align='center'>
			{showProfileDetails && (
				<Box mr='4' textAlign='right'>
					<Text>João Pedro Matias</Text>
					<Text color='gray.300' fontSize='small'>
						jpmmatias@gmail.com
					</Text>
				</Box>
			)}
			<Avatar size='md' name='João Pedro' src='src' />
		</Flex>
	);
}
