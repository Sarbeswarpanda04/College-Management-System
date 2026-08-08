

        /* =====================================
           VARIABLES
        ===================================== */

        const roleButtons =
            document.querySelectorAll(".role-btn");

        const identityGroup =
            document.getElementById("identityGroup");

        const emailGroup =
            document.getElementById("emailGroup");

        const identityLabel =
            document.getElementById("identityLabel");

        const identityInput =
            document.getElementById("identity");

        const emailInput =
            document.getElementById("email");

        const loginDescription =
            document.getElementById("login-description");

        const loginButton =
            document.getElementById("loginButton");

        const passwordInput =
            document.getElementById("password");

        const passwordToggle =
            document.getElementById("passwordToggle");

        const loginForm =
            document.getElementById("loginForm");


        let selectedRole = "student";


        /* =====================================
           ROLE SWITCHING
        ===================================== */

        roleButtons.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const role =
                        button.dataset.role;

                    selectedRole = role;


                    /* Active button */

                    roleButtons.forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                    button.classList.add(
                        "active"
                    );


                    /* STUDENT */

                    if (role === "student") {

                        identityGroup
                            .classList.remove(
                                "hidden"
                            );

                        emailGroup
                            .classList.add(
                                "hidden"
                            );


                        identityLabel.textContent =
                            "Registration Number";


                        identityInput.placeholder =
                            "Enter registration number";


                        identityInput.value = "";

                        emailInput.value = "";


                        loginDescription.textContent =
                            "Sign in to your student account";


                        loginButton.textContent =
                            "Login as Student";

                    }


                    /* FACULTY */

                    else if (role === "faculty") {

                        identityGroup
                            .classList.remove(
                                "hidden"
                            );

                        emailGroup
                            .classList.add(
                                "hidden"
                            );


                        identityLabel.textContent =
                            "Faculty ID / Employee Number";


                        identityInput.placeholder =
                            "Enter faculty ID";


                        identityInput.value = "";

                        emailInput.value = "";


                        loginDescription.textContent =
                            "Sign in to your faculty account";


                        loginButton.textContent =
                            "Login as Faculty";

                    }


                    /* SUPER ADMIN */

                    else if (role === "admin") {

                        identityGroup
                            .classList.add(
                                "hidden"
                            );

                        emailGroup
                            .classList.remove(
                                "hidden"
                            );


                        identityInput.value = "";


                        loginDescription.textContent =
                            "Sign in to the super admin portal";


                        loginButton.textContent =
                            "Login as Super Admin";

                    }


                }
            );

        });


        /* =====================================
           PASSWORD SHOW / HIDE
        ===================================== */

        passwordToggle.addEventListener(
            "click",
            () => {

                if (
                    passwordInput.type ===
                    "password"
                ) {

                    passwordInput.type =
                        "text";

                    passwordToggle.textContent =
                        "🙈";

                    passwordToggle.setAttribute(
                        "aria-label",
                        "Hide password"
                    );

                }

                else {

                    passwordInput.type =
                        "password";

                    passwordToggle.textContent =
                        "👁";

                    passwordToggle.setAttribute(
                        "aria-label",
                        "Show password"
                    );

                }

            }
        );


        /* =====================================
           FORM SUBMISSION
        ===================================== */

        loginForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                let username;


                if (
                    selectedRole ===
                    "admin"
                ) {

                    username =
                        emailInput.value.trim();

                }

                else {

                    username =
                        identityInput.value.trim();

                }


                const password =
                    passwordInput.value.trim();


                if (!username || !password) {

                    alert(
                        "Please enter your login credentials."
                    );

                    return;

                }


                /*
                 * BACKEND AUTHENTICATION
                 *
                 * This is where we will later
                 * send the credentials to:
                 *
                 * POST /api/auth/login
                 *
                 * The backend should determine:
                 *
                 * STUDENT
                 * FACULTY
                 * SUPER ADMIN
                 *
                 * and return the authenticated
                 * user's role, permissions,
                 * branch, year, section, etc.
                 */


                console.log({
                    role: selectedRole,
                    username: username,
                    password: password
                });


                alert(
                    "Login API will be connected here."
                );

            }
        );
