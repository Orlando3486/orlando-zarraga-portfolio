import type { Dictionary } from "../../i18n";
import type { Profile } from "../../types/portfolio";
import ScrollTop from "../ui/scrollTop";

export default function Footer({
  dict,
  profile,
}: {
  dict: Dictionary["contact"];
  profile: Profile;
}) {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="small">
          © {new Date().getFullYear()} {profile.name} · {dict.role}. {dict.rights}
        </p>
      </div>
      <ScrollTop label={dict.backToTop} />
    </footer>
  );
}
