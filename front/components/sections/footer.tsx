import { FiArrowUp } from "react-icons/fi";
import type { Dictionary } from "../../i18n";
import type { Profile } from "../../types/portfolio";

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
      <a href="#hero" className="icon-btn scroll-top" aria-label={dict.backToTop}>
        <FiArrowUp className="icon" aria-hidden="true" />
      </a>
    </footer>
  );
}
