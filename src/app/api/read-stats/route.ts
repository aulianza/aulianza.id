import { getALLTimeSinceToday, getReadStats } from '@/services/wakatime'

export async function GET() {
  try {
    const readStatsResponse = await getReadStats()
    const allTimeSinceTodayResponse = await getALLTimeSinceToday()

    const data = {
      ...readStatsResponse.data,
      all_time_since_today: allTimeSinceTodayResponse.data,
    }

    return Response.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
      },
      status: 200,
    })
  } catch (error) {
    return Response.json(
      { message: 'Internal Server Error' },
      {
        status: 500,
      },
    )
  }
}
