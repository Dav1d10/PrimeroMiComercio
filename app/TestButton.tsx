"use client"; // 👈 Client Component

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function TestButton() {
  return (
    <Button 
      onClick={() => window.location.href = 'chatbot.html'} 
      size="lg" 
      className="group"
    >
      Empieza Ahora
      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  );
}