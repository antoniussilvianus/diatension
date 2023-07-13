using system;
using system.Windows.Forms;

    namespace LoginExample
    {
        public partial class LoginForm : Form 
        {
            public LoginForm()
            {
                InitializeComponent();
            }
            
            private void btnLogin_click(Object Sender , eventArgs e)
            {
                string username = txtUsername.Text;
                string password = txtPassword.Text;

                if(username == 'admin' && password == 'admin')
                {
                    MessageBox.Show('Login Berhasil bro/sist!');
                }
                else
                {
                    MessageBox.Show('username/password salah!');
                }

            }
        }
    }