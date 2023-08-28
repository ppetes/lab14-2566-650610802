"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" />
      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        minRows={3}
        maxRows={4}
        mt="xs"
      />
      <Button color="orange" mt="xs">
        Submit Review
      </Button>
      <Divider my="sm" labelPosition="center" />
      <Group position="center" spacing="md">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} fractions={2} readOnly />
      </Group>
      <Text align="center" color="dimmed">
        Best pizza in this world. I give you X score.{" "}
      </Text>
      <Divider my="sm" labelPosition="center" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly />
      </Group>
      <Text align="center" color="dimmed">
        My favourite part is pepperoni{" "}
      </Text>
      <Pagination position="center" total={20} color="orange" mt="md" />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Ratchapon Prangthong 650610802
      </Text>
    </Container>
  );
}
