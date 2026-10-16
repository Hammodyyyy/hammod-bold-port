import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <span>© 2026 {profile.name}</span>
        <span>Roblox UI design and Studio implementation</span>
        <a href="/terms" className="foot-link">Terms</a>
      </div>
    </footer>
  );
}
