import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowLeft, User, Mail, Lock } from "lucide-react";
import { Signup } from "../../assets/dummystyles";
 
const SignUp = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "", type: "" });
  const navigate = useNavigate();
 
  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast({ visible: false, message: "", type: "" });
        if (toast.type === "success") navigate("/login");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast, navigate]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    if (!username.trim() || !email.trim() || !password.trim()) {
      setToast({ visible: true, message: "Tous les champs sont obligatoires", type: "error" });
      return;
    }
 
    setToast({ visible: true, message: "Création du compte en cours...", type: "info" });
    setTimeout(() => {
      setToast({ visible: true, message: "Compte créé avec succès !", type: "success" });
    }, 1500);
  };
 
  return (
    <div className={Signup.container}>
      {toast.visible && (
        <div className={`${Signup.toastBase} ${toast.type === "success" ? Signup.toastSuccess : Signup.toastError}`}>
          {toast.message}
        </div>
      )}
 
      <div className={Signup.card}>
        <Link to="/" className={Signup.backLink}>
          <ArrowLeft className="mr-1 h-4 w-4" />
          Retour à l'accueil
        </Link>
 
        <div className="text-center mb-8">
          <div className={Signup.iconContainer}>
            <User className="h-6 w-6 text-[#43C6AC]" />
          </div>
          <h1 className={Signup.heading}>Créer un compte</h1>
          <p className={Signup.subtext}>Rejoignez notre communauté de passionnés de lecture</p>
        </div>
 
        <form onSubmit={handleSubmit} className={Signup.form}>
          <div>
            <label className={Signup.label}>Nom d’utilisateur</label>
            <div className={Signup.inputWrapper}>
              <User className={Signup.iconLeft} />
              <input
                type="text"
                name="username"
                placeholder="Entrez un nom d’utilisateur"
                className={Signup.input}
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>
          </div>
 
          <div>
            <label className={Signup.label}>Courriel</label>
            <div className={Signup.inputWrapper}>
              <Mail className={Signup.iconLeft} />
              <input
                type="email"
                name="email"
                placeholder="courriel@example.com"
                className={Signup.input}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
 
          <div>
            <label className={Signup.label}>Mot de passe</label>
            <div className={Signup.inputWrapper}>
              <Lock className={Signup.iconLeft} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className={Signup.passwordInput}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={Signup.togglePassword}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
 
          <button type="submit" className={Signup.submitBtn}>
            Créer un compte
          </button>
        </form>
 
        <div className={Signup.footerText}>
          Vous avez déjà un compte ?{' '}
          <Link to="/login" className={Signup.link}>
            Connectez-vous
          </Link>
        </div>
      </div>
    </div>
  );
};
 
export default SignUp;