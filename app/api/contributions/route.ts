import { NextResponse } from 'next/server'

// Cache and revalidate data every 1 hour (3,600 seconds)
export const revalidate = 3600

const USERNAME = 'imayushsawant'
const API_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`

export async function GET() {
  try {
    const response = await fetch(API_URL, {
      next: { revalidate: 3600 },
      headers: {
        'User-Agent': 'Portfolio-Contributions-Fetcher',
      },
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: `GitHub API error: ${response.statusText}` },
        { status: response.status }
      )
    }

    const data = await response.json()

    return NextResponse.json(data, {
      status: 200,
      headers: {
        // Cache on CDN / Edge for 1h, allow stale-while-revalidate for seamless background refresh
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Failed to fetch GitHub contributions:', error)
    return NextResponse.json(
      { error: 'Internal server error while fetching GitHub contributions' },
      { status: 500 }
    )
  }
}

