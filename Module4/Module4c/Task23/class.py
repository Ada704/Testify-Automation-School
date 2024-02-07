class User:
    __password = "password"


def get_password(self):
    return self.__password


class ActiveUser(User):
    def get_password(self):
        return "********"


active_user = ActiveUser()
print(active_user.get_password())
