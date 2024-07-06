/**
 * @jest-environment node
 */

import '@testing-library/jest-dom'
import {middleware} from '../middleware'
import { NextRequest } from 'next/server'
import { NextURL } from 'next/dist/server/web/next-url'
import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies'

describe('middleware', () => {
  it('redirects to login given no cookie', () => {
    const request = {url: new URL ("http://localhost"), nextUrl: {pathname: "/dashboard"} as NextURL, cookies: {get: jest.fn()}as unknown as RequestCookies} as unknown as NextRequest;
    const response = middleware(request);
    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("http://localhost/")
  })

  it('redirects to dashboard given cookie', () => {
    const request = {url: new URL ("http://localhost"), nextUrl: {pathname: "/"} as NextURL, cookies: {get: jest.fn(() => ({value: "user"}))}as unknown as RequestCookies} as unknown as NextRequest;
    const response = middleware(request);
    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("http://localhost/dashboard")
  })
})