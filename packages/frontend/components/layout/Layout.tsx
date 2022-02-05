import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { useEthers, useNotifications } from '@usedapp/core'
import blockies from 'blockies-ts'
import NextLink from 'next/link'
import React from 'react'
import { getErrorMessage } from '../../lib/utils'
import { Balance } from '../Balance'
import { ConnectWallet } from '../ConnectWallet'
import { Head, MetaProps } from './Head'


// Extends `window` to add `ethereum`.
declare global {
  interface Window {
    ethereum: any
  }
}

/**
 * Constants & Helpers
 */

// Title text for the various transaction notifications.
const TRANSACTION_TITLES = {
  transactionStarted: 'Local Transaction Started',
  transactionSucceed: 'Local Transaction Completed',
}

// Takes a long hash string and truncates it.
function truncateHash(hash: string, length = 38): string {
  return hash.replace(hash.substring(6, length), '...')
}

/**
 * Prop Types
 */
interface LayoutProps {
  children: React.ReactNode
  customMeta?: MetaProps
}

/**
 * Component
 */
export const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  const { account, deactivate, error } = useEthers()
  const { notifications } = useNotifications()

  let blockieImageSrc
  if (typeof window !== 'undefined') {
    blockieImageSrc = blockies.create({ seed: account }).toDataURL()
  }

  return (
    <Box height="full" bg="teal.50" minH="100vh">
      <Head customMeta={customMeta} />
      <header>
        <Container maxWidth="container.xl">
          <SimpleGrid
            columns={[1, 1, 1, 2]}
            alignItems="center"
            justifyContent="space-between"
            py="8"
          >
            <Flex py={[4, null, null, 0]}>
              <NextLink href="/" passHref>
                <Link px="4" py="1">
                  Home
                </Link>
              </NextLink>
            </Flex>
            {account ? (
              <Flex
                order={[-1, null, null, 2]}
                alignItems={'center'}
                justifyContent={['flex-start', null, null, 'flex-end']}
              >
                <Balance />
                <Image ml="4" src={blockieImageSrc} alt="blockie" />
                <Menu placement="bottom-end">
                  <MenuButton as={Button} ml="4">
                    {truncateHash(account)}
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        deactivate()
                      }}
                    >
                      Disconnect
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            ) : (
              <ConnectWallet />
            )}
          </SimpleGrid>
        </Container>
      </header>
      <main>
        <Flex
          maxWidth="container.xl"
          alignItems="center"
          flexDir="column"
          mx="auto"
          minHeight="70vh"
        >
          {error && (
            <Alert status="error" mb="8">
              <AlertIcon />
              <AlertTitle mr={2}>Error:</AlertTitle>
              <AlertDescription>{getErrorMessage(error)}</AlertDescription>
            </Alert>
          )}
          {children}
          {notifications.map((notification) => {
            if (notification.type === 'walletConnected') {
              return null
            }
            return (
              <Alert
                key={notification.id}
                status="success"
                position="fixed"
                bottom="8"
                right="8"
                width="400px"
              >
                <AlertIcon />
                <Box>
                  <AlertTitle>
                    {TRANSACTION_TITLES[notification.type]}
                  </AlertTitle>
                  <AlertDescription overflow="hidden">
                    Transaction Hash:{' '}
                    {truncateHash(notification.transaction.hash, 61)}
                  </AlertDescription>
                </Box>
              </Alert>
            )
          })}
        </Flex>
      </main>
      <footer>
        {/* Add technologies used here */}
        <Container mt="8" py="8" maxWidth="container.xl" centerContent>
          <Text fontSize="lg" color="gray.600">Powered by</Text>
            <HStack>
            <Link href="https://github.com/GazellePay" isExternal>
              <Image 
              htmlWidth='120rem'
              src='https://user-images.githubusercontent.com/9114705/152164461-aeb383ef-1f54-49ee-84ff-e4b9fbb3c250.png' 
              alt='Polygon Logo' 
              />
            </Link>
            </HStack>
        </Container>
      </footer>
    </Box>
  )
}
