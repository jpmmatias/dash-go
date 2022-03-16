import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

interface SidebarProviderProps {
	children: ReactNode;
}

type SidebarContextData = UseDisclosureReturn;

const SiderbarContext = createContext({} as SidebarContextData);

export function SiderbarDraerProvider({ children }: SidebarProviderProps) {
	const disclousere = useDisclosure();
	const router = useRouter();

	useEffect(() => {
		disclousere.onClose();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.asPath]);

	return (
		<SiderbarContext.Provider value={disclousere}>
			{children}
		</SiderbarContext.Provider>
	);
}

export const useSidebarDrawer = () => {
	return useContext(SiderbarContext);
};
