import abc


class Vehicle(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def drive_direction(self):
        pass


class Car(Vehicle):
    def drive_direction(self):
        print("drive forward")


class Plane(Vehicle):
    def drive_direction(self):
        print("drive upward")


car = Car()
plane = Plane()

car.drive_direction()
plane.drive_direction()
