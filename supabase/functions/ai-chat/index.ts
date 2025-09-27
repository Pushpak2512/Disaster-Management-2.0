import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message, conversationHistory } = await req.json()

    // For now, we'll implement a simple rule-based response system
    // This can be enhanced with OpenAI API later
    const response = generateEmergencyResponse(message, conversationHistory || [])

    return new Response(
      JSON.stringify({ response }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Error in ai-chat function:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to process request' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})

function generateEmergencyResponse(message: string, history: any[]): string {
  const msg = message.toLowerCase()

  // Emergency keywords and responses
  if (msg.includes('earthquake')) {
    return "🏠 **Earthquake Safety Protocol:**\n\n1. **DROP** - Get down on hands and knees\n2. **COVER** - Take cover under a sturdy desk/table\n3. **HOLD ON** - Hold onto your shelter\n\n🚨 If you're experiencing an earthquake NOW, follow these steps immediately! Stay away from windows and heavy objects. For immediate help, call emergency services at **112**."
  }

  if (msg.includes('fire') || msg.includes('smoke')) {
    return "🔥 **Fire Emergency Protocol:**\n\n1. **Alert others** - Shout 'FIRE!'\n2. **Get low** - Crawl under smoke\n3. **Check doors** - Feel for heat before opening\n4. **Get out fast** - Use nearest safe exit\n5. **Call 101** - Fire department\n\n🚨 **If in immediate danger, evacuate NOW and call emergency services!**"
  }

  if (msg.includes('flood') || msg.includes('water')) {
    return "🌊 **Flood Safety Protocol:**\n\n1. **Move to higher ground** immediately\n2. **Avoid walking/driving** through flood water\n3. **Turn off utilities** if safe to do so\n4. **Stay informed** - Monitor weather alerts\n\n💡 **Remember:** 6 inches of moving water can knock you down. 1 foot can sweep away a vehicle. Call **112** if trapped!"
  }

  if (msg.includes('cyclone') || msg.includes('storm') || msg.includes('wind')) {
    return "🌪️ **Cyclone Safety Protocol:**\n\n1. **Seek shelter** in interior room, lowest floor\n2. **Stay away** from windows and doors\n3. **Have emergency kit** ready (water, food, flashlight)\n4. **Monitor alerts** on battery radio\n\n⚡ **Never go outside during the eye of the storm!** Call **112** for emergencies."
  }

  if (msg.includes('help') || msg.includes('emergency') || msg.includes('urgent')) {
    return "🚨 **Emergency Assistance Available:**\n\n**Immediate Help:**\n📞 **112** - All Emergency Services\n📞 **101** - Fire Department\n📞 **100** - Police\n📞 **108** - Medical Emergency\n\n**What's your emergency?** Please describe your situation so I can provide specific guidance.\n\n💡 **Remember:** If someone is injured or in immediate danger, call emergency services first, then I can help with additional guidance."
  }

  if (msg.includes('medical') || msg.includes('injury') || msg.includes('hurt')) {
    return "🏥 **Medical Emergency Protocol:**\n\n**Call 108 immediately for medical emergencies!**\n\n**Basic First Aid:**\n1. **Check responsiveness** - Tap shoulders, shout\n2. **Check breathing** - Look, listen, feel\n3. **Control bleeding** - Apply direct pressure\n4. **Don't move** severely injured persons\n\n🩹 **For minor injuries:** Clean wound, apply bandage. **For serious injuries:** Call 108 and keep patient calm."
  }

  if (msg.includes('evacuation') || msg.includes('evacuate')) {
    return "🏃 **Evacuation Protocol:**\n\n**Before Leaving:**\n1. **Grab emergency kit** (documents, medicine, water)\n2. **Turn off utilities** (gas, electricity)\n3. **Lock doors** but leave them unlocked for emergency services\n\n**During Evacuation:**\n1. **Follow designated routes** only\n2. **Stay calm** and help others\n3. **Check in** with family/friends\n\n📍 **Know your evacuation routes and meeting points!**"
  }

  if (msg.includes('kit') || msg.includes('supplies') || msg.includes('prepare')) {
    return "🎒 **Emergency Kit Essentials:**\n\n**Basic Supplies (72 hours):**\n💧 Water - 3 liters per person per day\n🍞 Non-perishable food\n🔦 Flashlight + extra batteries\n📻 Battery/hand-crank radio\n💊 Medications\n📄 Important documents (waterproof container)\n💰 Cash\n🧥 Warm clothing\n\n**Additional:** First aid kit, whistle, duct tape, garbage bags, personal hygiene items."
  }

  // Default response for general queries
  return `🤖 **Emergency AI Assistant Ready!**\n\nI can help with:\n🏠 **Disaster protocols** (earthquake, fire, flood, cyclone)\n🚨 **Emergency procedures**\n📞 **Emergency contacts**\n🎒 **Preparedness planning**\n🏥 **Basic first aid guidance**\n\n**For immediate emergencies, always call 112 first!**\n\nWhat specific emergency or safety topic would you like help with?`
}