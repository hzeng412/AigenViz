'use client';
import { HomePage } from '@/components/dashboard/Home';
import { WeedPressurePage } from '@/components/dashboard/WeedPressure';
import { CropStatusPage } from '@/components/dashboard/CropStatus';
import { InsightsPage } from '@/components/dashboard/Insights';
import { SettingsPage } from '@/components/dashboard/Settings';

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}

export function WeedPressure() {
  return (
    <main>
      <WeedPressurePage />
    </main>
  );
}

export function CropStatus() {
  return (
    <main>
      <CropStatusPage />
    </main>
  );
}

export function Insights() {
  return (
    <main>
      <InsightsPage />
    </main>
  );
}

export function Settings() {
  return (
    <main>
      <SettingsPage />
    </main>
  );
}
