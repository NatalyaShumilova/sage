import '@testing-library/jest-dom'
import {middleware} from '../middleware'
import { NextRequest } from 'next/server'
import { NextURL } from 'next/dist/server/web/next-url'

describe('middleware', () => {
  it('redirects to login given no cookie', () => {
    const request = {nextUrl: new NextURL("/dashboard") } as NextRequest;
    const response = middleware(request);
    expect(response.redirected).toBeTruthy();
  })
})